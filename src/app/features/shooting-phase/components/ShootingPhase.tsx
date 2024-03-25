import { useAppSelector } from "../../../hooks";
import { selectCurrentTurn } from "../../game/gameSlice";
import PlayerTurn from "./PlayerTurn";
import OpponentTurn from "./OpponentTurn";
import { Content } from "../../phase/types";

export interface ShootingPhaseProps {
  commandAbilitiesContent: Content[];
}

const ShootingPhase: React.FC<ShootingPhaseProps> = function ({
  commandAbilitiesContent,
}) {
  const currentTurn = useAppSelector(selectCurrentTurn);

  return (
    <>
      {currentTurn === "mine" ? (
        <PlayerTurn commandAbilitiesContent={commandAbilitiesContent} />
      ) : (
        <OpponentTurn commandAbilitiesContent={commandAbilitiesContent} />
      )}
    </>
  );
};

export default ShootingPhase;
