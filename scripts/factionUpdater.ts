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

  // Battle traits
  await updateAbilities({
    abilityEntities: abilityEntities.filter(
      (a) => !a.battleFormationId && !a.heroicTraitId && !a.artefactOfPowerId,
    ),
    abilities: faction.factionType.battleTraits,
    factionType: factionTypeEntity,
    collectionName: "ability",
  });

  // Battle formations
  for (const battleFormation of faction.factionType.battleFormations) {
    const battleFormationEntityId = await updateLore({
      factionType: factionTypeEntity,
      collectionName: "battleFormation",
      lore: { name: battleFormation.name, abilities: [] },
    });

    await updateAbilities({
      abilityEntities: abilityEntities.filter(
        (a) => a.battleFormationId === battleFormationEntityId,
      ),
      abilities: [battleFormation.ability],
      factionType: factionTypeEntity,
      collectionName: "ability",
      pbLore: {
        id: battleFormationEntityId!,
        pbLoreRelationName: "battleFormationId",
      },
    });
  }

  // Heroic traits
  const heroicTraitEntityId = await updateLore({
    factionType: factionTypeEntity,
    collectionName: "heroicTrait",
    lore: faction.factionType.heroicTraits,
  });
  await updateAbilities({
    abilityEntities: abilityEntities.filter(
      (a) => a.heroicTraitId === heroicTraitEntityId,
    ),
    abilities: faction.factionType.heroicTraits.abilities,
    factionType: factionTypeEntity,
    collectionName: "ability",
    pbLore: { id: heroicTraitEntityId!, pbLoreRelationName: "heroicTraitId" },
  });

  // Artefacts of power
  const artefactsOfPowerEntityId = await updateLore({
    factionType: factionTypeEntity,
    collectionName: "artefactOfPower",
    lore: faction.factionType.artefactsOfPower,
  });
  await updateAbilities({
    abilityEntities: abilityEntities.filter(
      (a) => a.artefactOfPowerId === artefactsOfPowerEntityId,
    ),
    abilities: faction.factionType.artefactsOfPower.abilities,
    factionType: factionTypeEntity,
    collectionName: "ability",
    pbLore: {
      id: artefactsOfPowerEntityId!,
      pbLoreRelationName: "artefactOfPowerId",
    },
  });

  const spellLoreEntityId = await updateLore({
    factionType: factionTypeEntity,
    collectionName: "spellLore",
    lore: faction.factionType.spellLore,
  });

  if (faction.factionType.spellLore) {
    await updateAbilities({
      abilityEntities: spellEntities.filter(
        (a) => a.spellLoreId === spellLoreEntityId,
      ),
      abilities: faction.factionType.spellLore.abilities,
      factionType: factionTypeEntity,
      collectionName: "spell",
      pbLore: { id: spellLoreEntityId!, pbLoreRelationName: "spellLoreId" },
    });
  }

  // Prayers
  const prayerLoreEntityId = await updateLore({
    factionType: factionTypeEntity,
    collectionName: "prayerLore",
    lore: faction.factionType.prayerLore,
  });

  if (faction.factionType.prayerLore) {
    await updateAbilities({
      abilityEntities: prayerEntities.filter(
        (a) => a.prayerLoreId === prayerLoreEntityId,
      ),
      abilities: faction.factionType.prayerLore?.abilities,
      factionType: factionTypeEntity,
      collectionName: "prayer",
      pbLore: { id: prayerLoreEntityId!, pbLoreRelationName: "prayerLoreId" },
    });
  }

  // TODO - manifestation lore

  return;
};

interface UpdateLore {
  factionType: RecordModel;
  collectionName: string;
  lore?: Lore;
}

const updateLore = async ({
  collectionName,
  factionType,
  lore,
}: UpdateLore) => {
  if (!lore) {
    console.log(`No lore supplied for ${collectionName}`);
    return;
  }
  const loreEntities = await pb.collection(collectionName).getFullList({
    filter: `factionTypeId="${factionType.id}"&&name="${lore.name}"`,
    requestKey: null,
  });
  if (loreEntities.length > 1) {
    throw new Error("Multiple Lores with the same name exists");
  }
  const loreEntity = loreEntities.find((a) => a.name === lore.name);

  if (loreEntity) {
    console.log(
      `${collectionName} ${lore.name} already exists and will be used.`,
    );
  } else if (dryRun) {
    console.log(`${collectionName} ${lore.name} will be created.`);
  }

  if (!loreEntity && !dryRun) {
    const newLoreEntity = await pb
      .collection(collectionName)
      .create(
        { name: lore.name, factionTypeId: factionType.id },
        { requestKey: null },
      );
    console.log(`${collectionName} ${lore.name} successfully created`);
    return newLoreEntity.id;
  }

  return loreEntity?.id;
};

interface UpdateAbilities {
  abilityEntities: RecordModel[];
  abilities: Ability[];
  factionType: RecordModel;
  collectionName: string;
  pbLore?: PbLore;
}

interface PbLore {
  id: string;
  pbLoreRelationName: string;
}

const updateAbilities = async ({
  abilityEntities,
  abilities,
  factionType,
  collectionName,
  pbLore,
}: UpdateAbilities) => {
  if (!pbLore && dryRun) {
    console.log("Abilities will be updated without a Lore");
  }

  const { abilitiesToUpdate, abilitiesToCreate } =
    abilities.reduce<MatchResult>(
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
      const relation = pbLore ? { [pbLore.pbLoreRelationName]: pbLore.id } : {};

      await pb
        .collection(collectionName)
        .create(
          { ...ability, factionTypeId: factionType.id, ...relation },
          { requestKey: null },
        );
      console.log(`${collectionName} ${ability.name} successfully created`);
    }
  }
};

export default updateFaction;
