import { useAppSelector } from "../../../hooks";
import { selectCurrentTurn, selectMyFactionTypeId } from "../../game/gameSlice";
import PlayerTurn from "./PlayerTurn";
import OpponentTurn from "./OpponentTurn";
import { useArmy } from "../../armies/useArmy";
import { useSelector } from "react-redux";
import { useGetAbilitiesByPhaseQuery } from "../../abilities/services/abilityService";
import Loader from "../../loader/Loader";
import AbilityList from "../../abilities/components/AbilityList";

export interface ShootingPhaseProps {}

const ShootingPhase: React.FC<ShootingPhaseProps> = function () {
  const currentTurn = useAppSelector(selectCurrentTurn);
  const { commandAbilities } = useArmy("combat");
  const factionTypeId = useSelector(selectMyFactionTypeId);
  const { data: abilities, isLoading: isAbilitiesLoading } =
    useGetAbilitiesByPhaseQuery(
      { factionTypeId: factionTypeId!, phase: "shooting-phase" },
      {
        skip: factionTypeId === undefined,
      },
    );

  if (isAbilitiesLoading || abilities === undefined) {
    return <Loader />;
  }

  return (
    <>
      {currentTurn === "mine" ? (
        <PlayerTurn commandAbilities={commandAbilities} />
      ) : (
        <OpponentTurn commandAbilities={commandAbilities} />
      )}
      <AbilityList abilities={abilities} />
    </>
  );
};

export default ShootingPhase;
