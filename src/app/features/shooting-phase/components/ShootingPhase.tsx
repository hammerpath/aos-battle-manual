import { useAppSelector } from "../../../hooks";
import { selectCurrentTurn } from "../../game/gameSlice";
import PlayerTurn from "./PlayerTurn";
import OpponentTurn from "./OpponentTurn";
import { useGetAbilitiesByPhaseQuery } from "../../abilities/services/abilityService";
import Loader from "../../loader/Loader";
import AbilityList from "../../abilities/components/AbilityList";
import { useGetFactionTypeIdByUserQuery } from "../../faction-types/factionTypeService";

export interface ShootingPhaseProps {}

const ShootingPhase: React.FC<ShootingPhaseProps> = function () {
  const currentTurn = useAppSelector(selectCurrentTurn);
  const { data: factionTypeId, isLoading: isUserFactionTypeIdLoading } =
    useGetFactionTypeIdByUserQuery();
  const { data: abilities, isLoading: isAbilitiesLoading } =
    useGetAbilitiesByPhaseQuery(
      { factionTypeId: factionTypeId!, phase: "shooting-phase" },
      {
        skip: factionTypeId === undefined,
      },
    );

  if (
    isAbilitiesLoading ||
    abilities === undefined ||
    isUserFactionTypeIdLoading
  ) {
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
