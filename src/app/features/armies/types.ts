// TODO - infer from json instead.
export type ArmyName = "Sylvaneth" | "Test";

export type Army = {
  name: string;
  spells?: Ability[];
  grandStrategies?: Ability[];
  battleTactics?: Ability[];
  preRound?: PreRound;
  heroPhase?: HeroPhase;
  commandAbilities?: CommandAbilities[];
};

export type CommandAbilities = Ability & {
  phase?: string[]; // TODO - should be Phase[]
  turn: string; // TODO - should be "mine" | "opponent" | "independent"
};

export type PreRound = {
  terrains?: Ability[];
};

export type HeroPhase = {
  yourTurn: HeroPhaseInfo;
  turnIndependent?: HeroPhaseInfo;
  opponentTurn?: HeroPhaseInfo;
};

// TODO - bad name
export type HeroPhaseInfo = {
  start?: Ability[];
};

export type Ability = {
  name: string;
  description: string;
};
