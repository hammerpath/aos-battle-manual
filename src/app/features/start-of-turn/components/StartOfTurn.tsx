import PageContent from "../../../components/PageContent";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import {
  selectCurrentTurn,
  selectMyFactionTypeId,
  userHasPriority,
} from "../../game/gameSlice";
import { Accordion, AccordionDetails } from "@mui/material";
import Header from "../../../components/Header";
import AccordionSummary from "../../../components/accordion/AccordionSummary";
import TurnSelect from "../../game/components/TurnSelect";
import { useArmy } from "../../armies/useArmy";
import { useGetAbilitiesByPhaseQuery } from "../../abilities/services/abilityService";
import { useSelector } from "react-redux";
import Loader from "../../loader/Loader";
import AbilityList from "../../abilities/components/AbilityList";
import BattleFormationList from "../../battleFormations/components/BattleFormationList";
import { useGetBattleFormationsByFactionIdQuery } from "../../battleFormations/battleFormationService";

export interface StartOfTurnProps {}

const StartOfTurn: React.FC<StartOfTurnProps> = function () {
  const currentTurn = useAppSelector(selectCurrentTurn);
  const { terrains } = useArmy("start-of-turn");
  const factionTypeId = useSelector(selectMyFactionTypeId);
  const { data: abilities, isLoading: isAbilitiesLoading } =
    useGetAbilitiesByPhaseQuery(
      { factionTypeId: factionTypeId!, phase: "deployment-phase" },
      {
        skip: factionTypeId === undefined,
      },
    );
  const { data: battleFormations, isLoading: isBattleFormationsLoading } =
    useGetBattleFormationsByFactionIdQuery(factionTypeId!, {
      skip: !factionTypeId,
    });
  const dispatch = useAppDispatch();

  if (isAbilitiesLoading || isBattleFormationsLoading) {
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
      {terrains?.map((terrain, index) => {
        return (
          <Accordion key={index}>
            <AccordionSummary>{terrain.name}</AccordionSummary>
            <AccordionDetails>{terrain.description}</AccordionDetails>
          </Accordion>
        );
      })}
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
