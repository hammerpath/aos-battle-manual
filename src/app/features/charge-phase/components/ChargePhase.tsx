import { useAppSelector } from "../../../hooks";
import { selectCurrentTurn } from "../../game/gameSlice";
import PlayerTurn from "./PlayerTurn";
import OpponentTurn from "./OpponentTurn";
import { useArmy } from "../../armies/useArmy";

export interface ChargePhaseProps {}

const ChargePhase: React.FC<ChargePhaseProps> = function () {
  const currentTurn = useAppSelector(selectCurrentTurn);
  const { commandAbilities } = useArmy("charging");

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

export default ChargePhase;
