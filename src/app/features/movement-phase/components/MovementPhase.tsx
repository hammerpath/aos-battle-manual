import { useAppSelector } from "../../../hooks";
import { selectCurrentTurn, selectMyFactionTypeId } from "../../game/gameSlice";
import PlayerTurn from "./PlayerTurn";
import OpponentTurn from "./OpponentTurn";
import { useArmy } from "../../armies/useArmy";
import { useSelector } from "react-redux";
import { useGetAbilitiesByPhaseQuery } from "../../abilities/services/abilityService";
import Loader from "../../loader/Loader";
import AbilityList from "../../abilities/components/AbilityList";

export interface MovementPhaseProps {}

const MovementPhase: React.FC<MovementPhaseProps> = function () {
  const currentTurn = useAppSelector(selectCurrentTurn);
  const factionTypeId = useSelector(selectMyFactionTypeId);
  const { data: abilities, isLoading: isAbilitiesLoading } =
    useGetAbilitiesByPhaseQuery(
      { factionTypeId: factionTypeId!, phase: "movement-phase" },
      {
        skip: factionTypeId === undefined,
      },
    );
  const { commandAbilities } = useArmy("movement");

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

export default MovementPhase;
