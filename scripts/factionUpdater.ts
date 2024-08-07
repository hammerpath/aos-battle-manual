import PocketBase, { RecordModel } from "pocketbase";
import { Ability, Faction, Lore } from "./fpParserNew";

interface MatchResult {
  abilitiesToUpdate: Ability[] & RecordModel[];
  abilitiesToCreate: Ability[];
}

const pb = new PocketBase("http://127.0.0.1:8090");
const dryRun = true;

const updateFaction = async (faction: Faction) => {
  const factionEntities = await pb.collection("faction").getFullList();
  const factionTypeEntities = await pb.collection("factionType").getFullList();

  const factionEntity = factionEntities.find((a) => a.name === faction.name);

  if (!factionEntity) {
    console.log("Faction entity was not found with name", faction.name);
    return;
  }

  const factionTypeEntity = factionTypeEntities.find(
    (a) => a.name === faction.factionType.name,
  );
  if (!factionTypeEntity) {
    console.log(
      "Faction type entity was not found with name",
      faction.factionType.name,
    );
    return;
  }

  const abilityEntities = await pb.collection("ability").getFullList({
    filter: `factionTypeId="${factionTypeEntity.id}"`,
  });
  const spellEntities = await pb.collection("spell").getFullList({
    filter: `factionTypeId="${factionTypeEntity.id}"`,
  });
  const prayerEntities = await pb.collection("prayer").getFullList({
    filter: `factionTypeId="${factionTypeEntity.id}"`,
  });

  // Battle formations
  for (const battleFormation of faction.factionType.battleFormations) {
    const battleFormationEntityId = await updateLore(
      "battleFormation",
      factionTypeEntity.id,
      { name: battleFormation.name, abilities: [] },
    );

    await updateAbilities(
      abilityEntities.filter(
        (a) => a.battleFormationId === battleFormationEntityId,
      ),
      battleFormationEntityId!,
      "battleFormationId",
      factionTypeEntity.id,
      "ability",
      { name: battleFormation.name, abilities: [battleFormation.ability] },
    );
  }

  // TODO - battle traits

  // Heroic traits
  const heroicTraitEntityId = await updateLore(
    "heroicTrait",
    factionTypeEntity.id,
    faction.factionType.heroicTraits,
  );
  await updateAbilities(
    abilityEntities.filter((a) => a.heroicTraitId === heroicTraitEntityId),
    heroicTraitEntityId!,
    "heroicTraitId",
    factionTypeEntity.id,
    "ability",
    faction.factionType.heroicTraits,
  );

  // Artefacts of power
  const artefactsOfPowerEntityId = await updateLore(
    "artefactOfPower",
    factionTypeEntity.id,
    faction.factionType.artefactsOfPower,
  );
  await updateAbilities(
    abilityEntities.filter(
      (a) => a.artefactOfPowerId === artefactsOfPowerEntityId,
    ),
    artefactsOfPowerEntityId!,
    "artefactOfPowerId",
    factionTypeEntity.id,
    "ability",
    faction.factionType.artefactsOfPower,
  );

  const spellLoreEntityId = await updateLore(
    "spellLore",
    factionTypeEntity.id,
    faction.factionType.spellLore,
  );
  await updateAbilities(
    spellEntities.filter((a) => a.spellLoreId === spellLoreEntityId),
    spellLoreEntityId!,
    "spellLoreId",
    factionTypeEntity.id,
    "spell",
    faction.factionType.spellLore,
  );

  // Prayers
  const prayerLoreEntityId = await updateLore(
    "prayerLore",
    factionTypeEntity.id,
    faction.factionType.prayerLore,
  );
  await updateAbilities(
    prayerEntities.filter((a) => a.prayerLoreId === prayerLoreEntityId),
    prayerLoreEntityId!,
    "prayerLoreId",
    factionTypeEntity.id,
    "prayer",
    faction.factionType.prayerLore,
  );

  // TODO - manifestation lore

  return;
};

const updateLore = async (
  pbLoreName: string,
  factionTypeId: string,
  lore?: Lore,
) => {
  if (!lore) {
    console.log(`No lore supplied for ${pbLoreName}`);
    return;
  }
  const loreEntities = await pb.collection(pbLoreName).getFullList({
    filter: `factionTypeId="${factionTypeId}"&&name="${lore.name}"`,
    requestKey: null,
  });
  if (loreEntities.length > 1) {
    throw new Error("Multiple Lores with the same name exists");
  }
  const loreEntity = loreEntities.find((a) => a.name === lore.name);

  if (loreEntity) {
    console.log(`${pbLoreName} ${lore.name} already exists and will be used.`);
  } else if (dryRun) {
    console.log(`${pbLoreName} ${lore.name} will be created.`);
  }

  if (!loreEntity && !dryRun) {
    const newLoreEntity = await pb
      .collection(pbLoreName)
      .create({ name: lore.name, factionTypeId }, { requestKey: null });
    console.log(`${pbLoreName} ${lore.name} successfully created`);
    return newLoreEntity.id;
  }

  return loreEntity?.id;
};

const updateAbilities = async (
  abilityEntities: RecordModel[],
  loreId: string,
  pbLoreRelationName: string,
  factionTypeId: string,
  collectionName: string,
  lore?: Lore,
) => {
  if (!lore) {
    return;
  }

  const { abilitiesToUpdate, abilitiesToCreate } =
    lore.abilities.reduce<MatchResult>(
      (acc, a) => {
        abilityEntities.some((b) => a.name === b.name)
          ? acc.abilitiesToUpdate.push({
              ...abilityEntities.find((b) => b.name === a.name)!,
              ...a,
            })
          : acc.abilitiesToCreate.push(a);
        return acc;
      },
      { abilitiesToUpdate: [], abilitiesToCreate: [] },
    );

  if (dryRun) {
    abilitiesToUpdate.forEach((a) =>
      console.log(`${collectionName} ${a.name} will be updated.`),
    );
    abilitiesToCreate.forEach((a) =>
      console.log(`${collectionName} ${a.name} will be created.`),
    );
  }

  if (!dryRun) {
    for (const ability of abilitiesToUpdate) {
      await pb
        .collection(collectionName)
        .update(ability.id!, { ...ability }, { requestKey: null });
      console.log(`${collectionName} ${ability.name} successfully updated`);
    }
    for (const ability of abilitiesToCreate) {
      await pb
        .collection(collectionName)
        .create(
          { ...ability, factionTypeId, [pbLoreRelationName]: loreId },
          { requestKey: null },
        );
      console.log(`${collectionName} ${ability.name} successfully created`);
    }
  }
};

export default updateFaction;
