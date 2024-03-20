import { useAppSelector } from "../../../hooks";
import { selectCurrentTurn } from "../../game/gameSlice";
import PlayerTurn from "./PlayerTurn";
import OpponentTurn from "./OpponentTurn";

export interface MovementPhaseProps {}

const MovementPhase: React.FC<MovementPhaseProps> = function () {
  const currentTurn = useAppSelector(selectCurrentTurn);

  return <>{currentTurn === "mine" ? <PlayerTurn /> : <OpponentTurn />}</>;
};

export default MovementPhase;
