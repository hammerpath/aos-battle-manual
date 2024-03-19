// TODO - infer from json instead.
export type ArmyName = "Sylvaneth" | "Test";

export type Army = {
  name: string;
  preRound?: PreRound;
  heroPhase?: HeroPhase[];
};

export type PreRound = {
  terrains?: Ability[];
  grandStrategies?: Ability[];
};

export type HeroPhase = {
  start?: Ability[];
  battleTactics?: Ability[];
};

export type Ability = {
  name: string;
  description: string;
};
