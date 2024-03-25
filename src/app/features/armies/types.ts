// TODO - infer from json instead.
export type ArmyName = "Sylvaneth" | "Ossiarch Bonereapers";

export type Army = {
  name: string;
  terrains?: Ability[];
  spells?: Ability[];
  grandStrategies?: Ability[];
  battleTactics?: Ability[];
  commandAbilities?: CommandAbilities[];
};

export type CommandAbilities = Ability & {
  phase?: string[]; // TODO - should be Phase[]
  turn: string; // TODO - should be "mine" | "opponent" | "independent"
};

export type Ability = {
  name: string;
  description: string;
};
