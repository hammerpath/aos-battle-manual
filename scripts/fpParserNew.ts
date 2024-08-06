import xlsx from "node-xlsx";
import normalizeAndCapitalize from "./normalizeAndCapitalize";

interface Ability {
  id?: string;
  name: string;
  declare?: string;
  effect: string;
}

interface Lore {
  id?: string;
  name: string;
  abilities: Ability[];
}

interface BattleFormation {
  id?: string;
  name: string;
  ability: Ability;
}

interface ParseResult<T> {
  rowIndex: number;
  value: T;
}

interface Faction {
  id?: string;
  name: string;
  factionType: FactionType;
}

interface FactionType {
  id?: string;
  name: string;
  battleFormations: BattleFormation[];
  heroicTraits: Lore;
  artefactsOfPower: Lore;
  spellLore?: Lore;
  prayerLore?: Lore;
  manifestationLore?: Lore;
}

const workSheetsFromFile = xlsx.parse(`./files/ogor-mawtribes.xlsx`);
const rows = workSheetsFromFile[0].data;

const factionTypeNameRaw = rows[0][0];
const factionTypeNameRawParts = (factionTypeNameRaw as string).split("\n");
const factionTypeName = `${normalizeAndCapitalize(factionTypeNameRawParts[0])}: ${normalizeAndCapitalize(factionTypeNameRawParts.slice(1).join(" "))}`;
const factionName = factionTypeName.split(": ")[1];

console.log(factionTypeName);

/* Supported factions
- Flesh-eater Courts
- Gloomspite
- Ossiarch Bonereapers
- Stormcast Eternals
- Sylvaneth
- Idoneth Deepkin
- Kharadron Overlords
- Soulblight Gravelords
- Sons of Behemat
- Lumineth Realm-lords
- Hedonites of Slaanesh
- Slaves to Darkness
- Maggotkin of Nurgle
- Ogor Mawtribes
*/

// Unsupported factions ordered by ease of fixing.

// Make an exception for this specific faction
if (factionTypeName.includes("Blades")) {
  throw new Error(
    "Unsupported faction since name is just Blades and manifestation lore comes before prayer lore",
  );
}
// -----------------------

// Probably easy refactoring
if (factionTypeName.includes("Orruk")) {
  throw new Error("Unsupported faction since it has multiple faction types");
}
if (factionTypeName.includes("Seraphon")) {
  throw new Error("Unsupported faction since it has multiple spell lores");
}
if (factionTypeName.includes("Disciples of")) {
  throw new Error(
    "Unsupported faction since name is just Disciples of and it has multiple spell lores",
  );
}
// -----------------------

// Search for bugs
if (factionTypeName.includes("Daughters")) {
  throw new Error(
    "Unsupported faction because of an unknown error in battle formations",
  );
}
if (factionTypeName.includes("Fyreslayers")) {
  throw new Error(
    "Unsupported faction since battle formation names are incorrect",
  );
}
if (factionTypeName.includes("Nighthaunt")) {
  throw new Error(
    "Unsupported faction because of an unknown error in battle formations",
  );
}
if (factionTypeName.includes("Cities of Sigmar")) {
  throw new Error(
    "Unsupported faction because of a missing word in the battle formation Collegiate Arcane",
  );
}
// -----------------------

const isString = (value: unknown) => value && typeof value === "string";

const parseAbility = (value): Ability | undefined => {
  if (
    isString(value) &&
    (value.includes("Declare:") || value.includes("Effect:"))
  ) {
    const nameMatch = value.match(/^[^:]+/);

    const name = nameMatch ? normalizeAndCapitalize(nameMatch[0]) : "";

    const declareMatch = value.match(/Declare:\s*([\s\S]*?)\s*Effect:/);
    const declare = declareMatch
      ? declareMatch[1].replace(/\n/g, " ")
      : undefined;

    const effectMatch = value.match(/Effect:\s*([\s\S]*)/);
    const effect = effectMatch ? effectMatch[1].replace(/\n/g, " ") : undefined;

    if (!effect) {
      throw new Error("Effect must not be undefined");
    }

    return { name, declare, effect };
  }

  return undefined;
};

// // This needs to be called when "*** LORE" text is received
const parseLore = (
  rowIndex: number,
  columnIndex: number,
  stopKeywords: string[],
): ParseResult<Lore> => {
  let lore: Partial<Lore> = { abilities: [] };

  for (let i = rowIndex; i < rows.length; i++) {
    const columnLength = rows[i].length;
    for (let j = rowIndex === i ? columnIndex : 0; j < columnLength; j++) {
      const value = rows[i][j];

      const ability = parseAbility(value);

      if (isString(value) && !ability && !lore.name) {
        const parts = (value as string).split("\n");
        const indexOfParenthesis = parts[1].indexOf("(");
        if (indexOfParenthesis !== -1) {
          parts[1] = parts[1].substring(0, indexOfParenthesis).trim();
        }
        lore = { ...lore, name: normalizeAndCapitalize(parts[1]) };
      }

      if (ability) {
        if (!lore.abilities) {
          lore.abilities = [];
        }
        lore.abilities.push(ability);
      }

      if (
        isString(value) &&
        stopKeywords.some((a) => (value as string).includes(a))
      ) {
        return {
          rowIndex: i,
          value: lore as Lore,
        };
      }
    }
  }

  throw new Error("No lores found");
};

// This needs to be called after "BATTLE FORMATIONS" text
const parseBattleFormations = (
  rowIndex: number,
): ParseResult<BattleFormation[]> => {
  const battleFormations: Partial<BattleFormation>[] = [];

  for (let i = rowIndex; i < rows.length; i++) {
    const columnLength = rows[i].length;
    for (let j = 0; j < columnLength; j++) {
      const value = rows[i][j];

      const ability = parseAbility(value);

      // Add name
      if (
        isString(value) &&
        battleFormations.length < 4 &&
        !ability &&
        (battleFormations.length === 0 ||
          battleFormations.filter((a) => a.name && !a.ability).length !== 2)
      ) {
        const parts = (value as string).split("\n");

        if (parts.length > 1) {
          // Battle formation headers are separated
          battleFormations.push({ name: normalizeAndCapitalize(parts[0]) });
        } else {
          // Battle formation headers share the same column
          const parts = (value as string).split(/\s{4,}/);
          battleFormations.push({ name: normalizeAndCapitalize(parts[0]) });
          battleFormations.push({ name: normalizeAndCapitalize(parts[1]) });
        }

        // Assert
        if (battleFormations.length > 4) {
          throw new Error(
            "Battle formations can't contain more than 4 elements.",
          );
        }
      }

      // Add ability
      if (
        isString(value) &&
        battleFormations.some((a) => !a.ability) &&
        ability
      ) {
        const index = battleFormations.map((a) => a.ability).indexOf(undefined);
        battleFormations[index] = { ...battleFormations[index], ability };
      }

      if (
        battleFormations.length === 4 &&
        battleFormations.every((a) => a.ability !== undefined)
      ) {
        return { rowIndex: i, value: battleFormations as BattleFormation[] };
      }
    }
  }

  throw new Error("Couldn't find 4 battleformations with abilities");
};

const parseFile = () => {
  let factionType: Partial<FactionType> = { name: factionTypeName };
  for (let i = 0; i < rows.length; i++) {
    const columnLength = rows[i].length;
    for (let j = 0; j < columnLength; j++) {
      const value = rows[i][j];

      if (isString(value) && value.includes("BATTLE FORMATIONS")) {
        const battleFormationResult = parseBattleFormations(i + 1);
        i = battleFormationResult.rowIndex;
        factionType = {
          ...factionType,
          battleFormations: battleFormationResult.value,
        };
      }
      if (isString(value) && value.includes("HEROIC TRAITS")) {
        const heroicTraitsResult = parseLore(i, j, ["ARTEFACTS OF POWER"]);
        i = heroicTraitsResult.rowIndex - 1;
        factionType = {
          ...factionType,
          heroicTraits: heroicTraitsResult.value,
        };
      }
      if (isString(value) && value.includes("ARTEFACTS OF POWER")) {
        const artefactsOfPowerResult = parseLore(i, j, [
          "SPELL LORE",
          "PRAYER LORE",
          "MANIFESTATION LORE",
          "WARSCROLL",
        ]);
        i = artefactsOfPowerResult.rowIndex - 1;
        factionType = {
          ...factionType,
          artefactsOfPower: artefactsOfPowerResult.value,
        };
      }
      if (isString(value) && value.includes("SPELL LORE")) {
        const spellLoreResult = parseLore(i, j, [
          "PRAYER LORE",
          "MANIFESTATION LORE",
          "WARSCROLL",
        ]);
        i = spellLoreResult.rowIndex - 1;
        factionType = { ...factionType, spellLore: spellLoreResult.value };
      }
      if (isString(value) && value.includes("PRAYER LORE")) {
        const prayerLoreResult = parseLore(i, j, [
          "MANIFESTATION LORE",
          "WARSCROLL",
        ]);
        i = prayerLoreResult.rowIndex - 1;
        factionType = { ...factionType, prayerLore: prayerLoreResult.value };
      }
      if (isString(value) && value.includes("MANIFESTATION LORE")) {
        const manifestationLoreResult = parseLore(i, j, ["WARSCROLL"]);
        i = manifestationLoreResult.rowIndex - 1;
        factionType = {
          ...factionType,
          manifestationLore: manifestationLoreResult.value,
        };
      }
      if (isString(value) && value.includes("WARSCROLL")) {
        const faction: Faction = {
          name: factionName,
          factionType: factionType as FactionType,
        };

        console.dir(faction, { depth: 3 });

        return;
      }
    }
  }
};

parseFile();
