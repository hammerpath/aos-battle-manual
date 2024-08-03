import { Turn } from "./services/types";

export interface Ability {
  id: string;
  name: string;
  commandPoints: number;
  turn?: Turn;
}
