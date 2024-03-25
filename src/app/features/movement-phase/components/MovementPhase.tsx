import { useAppSelector } from "../../../hooks";
import { selectCurrentTurn } from "../../game/gameSlice";
import PlayerTurn from "./PlayerTurn";
import OpponentTurn from "./OpponentTurn";
import { useArmy } from "../../armies/useArmy";

export interface MovementPhaseProps {}

const MovementPhase: React.FC<MovementPhaseProps> = function () {
  const currentTurn = useAppSelector(selectCurrentTurn);
  const { commandAbilities } = useArmy("movement");

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

export default MovementPhase;
