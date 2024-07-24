import { useAppSelector } from "../../hooks";
import { selectCurrentTurn, selectMyArmyName } from "../game/gameSlice";
import { Phase } from "../phase/types";
import { getArmy } from "./Army";

export type Round = Phase | "start-of-turn" | "post-round";

export function useArmy(round: Round) {
  const currentTurn = useAppSelector(selectCurrentTurn);
  const armyName = useAppSelector(selectMyArmyName);
  const army = getArmy(armyName);

  const terrains = army?.terrains;
  const spells = currentTurn === "mine" ? army?.spells : undefined;
  const battleTactics =
    currentTurn === "mine" ? army?.battleTactics : undefined;
  const commandAbilities = army?.commandAbilities?.filter(
    (ca) =>
      ca.turn === currentTurn ||
      (ca.turn === "independent" && ca.phase?.includes(round)),
  );

  return {
    terrains,
    spells,
    battleTactics,
    commandAbilities,
  };
}
