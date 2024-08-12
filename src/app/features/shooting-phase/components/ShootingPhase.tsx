import { useAppSelector } from "../../../hooks";
import { selectCurrentTurn } from "../../game/gameSlice";
import PlayerTurn from "./PlayerTurn";
import OpponentTurn from "./OpponentTurn";
import { useGetAbilitiesByPhaseQuery } from "../../abilities/services/abilityService";
import Loader from "../../loader/Loader";
import AbilityList from "../../abilities/components/AbilityList";
import { GameSettings } from "../../game/types";

export interface ShootingPhaseProps {
  gameSettings: GameSettings;
}

const ShootingPhase: React.FC<ShootingPhaseProps> = function ({
  gameSettings,
}) {
  const currentTurn = useAppSelector(selectCurrentTurn);
  const { data: abilities, isLoading: isAbilitiesLoading } =
    useGetAbilitiesByPhaseQuery({
      factionTypeId: gameSettings.factionTypeId,
      phase: "shooting-phase",
    });

  if (isAbilitiesLoading || abilities === undefined) {
    return <Loader />;
  }

  return (
    <>
      {currentTurn === "mine" ? <PlayerTurn /> : <OpponentTurn />}
      <AbilityList abilities={abilities} />
    </>
  );
};

export default ShootingPhase;
