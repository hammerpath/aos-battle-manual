import PageContent from "../../../components/PageContent";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { selectCurrentTurn, userHasPriority } from "../../game/gameSlice";
import { Accordion, AccordionDetails } from "@mui/material";
import Header from "../../../components/Header";
import AccordionSummary from "../../../components/accordion/AccordionSummary";
import TurnSelect from "../../game/components/TurnSelect";
import { useGetAbilitiesByPhaseQuery } from "../../abilities/services/abilityService";
import Loader from "../../loader/Loader";
import AbilityList from "../../abilities/components/AbilityList";
import BattleFormationList from "../../battleFormations/components/BattleFormationList";
import { useGetBattleFormationsByFactionTypeIdQuery } from "../../battleFormations/battleFormationService";
import { useGetGameSettingsQuery } from "../../game/gameSettingsService";

export interface StartOfTurnProps {}

const StartOfTurn: React.FC<StartOfTurnProps> = function () {
  const currentTurn = useAppSelector(selectCurrentTurn);
  const { data: gameSettings, isLoading: isGameSettingsLoading } =
    useGetGameSettingsQuery();
  const { data: abilities, isLoading: isAbilitiesLoading } =
    useGetAbilitiesByPhaseQuery(
      { factionTypeId: gameSettings!.factionTypeId, phase: "deployment-phase" },
      {
        skip: !gameSettings,
      },
    );
  const { data: battleFormations, isLoading: isBattleFormationsLoading } =
    useGetBattleFormationsByFactionTypeIdQuery(gameSettings!.factionId, {
      skip: !gameSettings,
    });
  const dispatch = useAppDispatch();

  if (
    isAbilitiesLoading ||
    isBattleFormationsLoading ||
    isGameSettingsLoading
  ) {
    return <Loader />;
  }

  return (
    <>
      <PageContent>
        <Header>Game setup</Header>
      </PageContent>
      <Accordion>
        <AccordionSummary>Set up terrain</AccordionSummary>
      </Accordion>
      <Accordion>
        <AccordionSummary>Set up custom terrain</AccordionSummary>
      </Accordion>
      <Accordion>
        <AccordionSummary>Deploy units</AccordionSummary>
      </Accordion>
      <Accordion>
        <AccordionSummary>Priority roll</AccordionSummary>
        <AccordionDetails>
          At the start of each battle round, the players must roll off. This is
          called the priority roll. The winner has priority in that battle round
          and must decide who will take the first turn and who will take the
          second turn. In the event of a tied priority roll, do not roll off
          again. Instead, if it is the first battle round, the player who
          finished deploying their army first has priority. Otherwise, the
          player who went first in the previous battle round has priority.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>Command points</AccordionSummary>
        <AccordionDetails>
          At the start of each Battle Round each player gains four Command
          Points, plus one extra if they're the underdog (have fewer Victory
          Points than their opponent at the start of the round). You also get an
          extra one in the first battle round if you are 50 points or more under
          your opponent's list. Unspent Command Points are lost at the end of
          each Battle Round.
        </AccordionDetails>
      </Accordion>
      <AbilityList abilities={abilities} />
      {battleFormations ? (
        <BattleFormationList battleFormations={battleFormations} />
      ) : null}

      <PageContent>
        <Header>Who's turn</Header>
      </PageContent>
      <TurnSelect
        currentTurn={currentTurn}
        onChange={(event) =>
          dispatch(userHasPriority(event.target.value === "mine"))
        }
      />
    </>
  );
};

export default StartOfTurn;
