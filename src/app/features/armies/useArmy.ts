import mergeArrays from "../../utils/mergeArrays";
import { CurrentTurn } from "../game/gameSlice";
import { Content } from "../phase/types";
import { getArmy } from "./Army";
import { Ability, ArmyName } from "./types";

// TODO - use or remove this.
export type Phase =
  | "hero"
  | "movement"
  | "shooting"
  | "charging"
  | "combat"
  | "battleshock"
  | "post-round";

const mapAbilityToComponentContent = (ability: Ability): Content => {
  return { summary: ability.name, details: ability.description };
};

export function useArmy(
  phase: string | undefined,
  turn: CurrentTurn,
  armyName?: ArmyName,
) {
  const army = getArmy(armyName);

  switch (phase) {
    case "hero":
      return {
        startContent:
          turn === "mine"
            ? mergeArrays(
                army?.heroPhase?.yourTurn.start?.map(
                  mapAbilityToComponentContent,
                ),
                army?.heroPhase?.turnIndependent?.start?.map(
                  mapAbilityToComponentContent,
                ),
              )
            : mergeArrays(
                army?.heroPhase?.opponentTurn?.start?.map(
                  mapAbilityToComponentContent,
                ),
                army?.heroPhase?.turnIndependent?.start?.map(
                  mapAbilityToComponentContent,
                ),
              ),
        battleTacticsContent:
          turn === "mine"
            ? army?.battleTactics?.map(mapAbilityToComponentContent)
            : undefined,
        spells:
          turn === "mine"
            ? army?.spells?.map(mapAbilityToComponentContent)
            : undefined,
      };
    default:
      return {
        startContent: undefined,
        battleTacticsContent: undefined,
        spells: undefined,
      };
  }
}
