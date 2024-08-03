// TODO - this should not be defined here
export type Turn = "any" | "mine" | "opponent";

export interface Ability {
  id: string;
  name: string;
}

export interface AbilityUsage {
  id: string;
  name: string;
}
