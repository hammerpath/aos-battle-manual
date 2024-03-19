import { useAppSelector } from "../../../hooks";
import { selectCurrentTurn } from "../../game/gameSlice";
import PlayerTurn from "./PlayerTurn";
import OpponentTurn from "./OpponentTurn";

export interface ChargePhaseProps {}

const ChargePhase: React.FC<ChargePhaseProps> = function () {
  const currentTurn = useAppSelector(selectCurrentTurn);

  return <>{currentTurn === "player" ? <PlayerTurn /> : <OpponentTurn />}</>;
};

export default ChargePhase;
