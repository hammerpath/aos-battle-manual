import PageContent from "../../../components/PageContent";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import {
  selectArmyName,
  selectHasPriority,
  userHasPriority,
} from "../../game/gameSlice";
import AccordionHeader from "../../../components/AccordionHeader";
import TurnSelect from "../../game/components/TurnSelect";
import { selectGrandStrategiesEnabled } from "../../game-settings/gameSettingsSlice";
import { getArmy } from "../../armies/Army";
import PhaseContent from "../../phase/components/PhaseContent";
import mergeArrays from "../../../utils/mergeArrays";
import { getGrandStrategies } from "../../../rules/rules";

const PreRounds: React.FC = function () {
  const hasPriority = useAppSelector(selectHasPriority);
  const grandStrategyEnabled = useAppSelector(selectGrandStrategiesEnabled);
  const armyName = useAppSelector(selectArmyName);
  const army = armyName && getArmy(armyName);

  const dispatch = useAppDispatch();

  return (
    <>
      {grandStrategyEnabled ? (
        <PhaseContent
          header={"Select Grand Strategy"}
          content={mergeArrays(
            army?.preRound?.grandStrategies,
            getGrandStrategies()
          ).map((ability) => {
            return { summary: ability.name, details: ability.description };
          })}
        />
      ) : null}
      <PhaseContent
        header="Game setup"
        content={[
          { summary: "Set up terrain" },
          { summary: "Set up custom terrain" },
          { summary: "Deploy units" },
          {
            summary: "Priority roll",
            details:
              "At the start of each battle round, the players must roll off. This is called the priority roll. The winner has priority in that battle round and must decide who will take the first turn and who will take the second turn.",
          },
          {
            summary: "Command points",
            details:
              "After determining who will take which turn, the player who will take the first turn receives 1 command point (see 6.0) and the player who will take the second turn receives 2 command points.",
          },
        ]}
      />
      <PageContent>
        <AccordionHeader>Who's turn</AccordionHeader>
      </PageContent>
      <TurnSelect
        currentTurn={hasPriority ? "player" : "opponent"}
        onChange={(event) =>
          dispatch(userHasPriority(event.target.value === "player"))
        }
      />
    </>
  );
};

export default PreRounds;
