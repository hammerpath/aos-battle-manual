import { Turn } from "./services/types";

export interface Ability {
  id: string;
  name: string;
  declare?: string;
  effect: string;
  commandPoints: number;
  turn?: Turn;
}
