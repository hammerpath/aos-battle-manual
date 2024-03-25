import { useAppSelector } from "../../../hooks";
import { selectCurrentTurn } from "../../game/gameSlice";
import PlayerTurn from "./PlayerTurn";
import OpponentTurn from "./OpponentTurn";
import { useArmy } from "../../armies/useArmy";

export interface ShootingPhaseProps {}

const ShootingPhase: React.FC<ShootingPhaseProps> = function () {
  const currentTurn = useAppSelector(selectCurrentTurn);
  const { commandAbilities } = useArmy("combat");

  return (
    <>
      {currentTurn === "mine" ? (
        <PlayerTurn commandAbilities={commandAbilities} />
      ) : (
        <OpponentTurn commandAbilities={commandAbilities} />
      )}
    </>
  );
};

export default ShootingPhase;
