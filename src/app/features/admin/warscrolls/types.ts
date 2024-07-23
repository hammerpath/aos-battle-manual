import { MeleeWeapon } from "../../weapons/melee/components/EditMeleeWeapon";
import { RangedWeapon } from "../../weapons/ranged/components/EditRangedWeapon";
import { Ability } from "../abilities/components/EditAbility";

export interface Warscroll {
  name: string;
  move?: string;
  health: string;
  control?: string;
  banishment?: string;
  save: string;
  modelCount: string;
  points?: string;
  rangedWeapons?: RangedWeapon[];
  meleeWeapons?: MeleeWeapon[];
  abilities: Ability[];
  // TODO - add to EditWarscroll component
  terrainAbilities?: string[];
  keywords: string[];
}
