import { Accordion, AccordionDetails } from "@mui/material";
import AccordionHeader from "../../../components/AccordionHeader";
import { Page } from "../../../components/Page";
import PageContent from "../../../components/PageContent";
import { useAppSelector } from "../../../hooks";
import GameHeader from "../../game/components/GameHeader";
import { selectCurrentTurn } from "../../game/gameSlice";
import AccordionSummary from "../../../components/accordion/AccordionSummary";
import PlayerTurn from "../components/PlayerTurn";
import OpponentTurn from "../components/OpponentTurn";
import PhaseNavigation from "../../../components/PhaseNavigation";

export interface MovementPhaseProps {}

const MovementPhase: React.FC<MovementPhaseProps> = function () {
  const currentTurn = useAppSelector(selectCurrentTurn);
  return (
    <Page>
      <PageContent>
        <GameHeader currentTurn={currentTurn} />
      </PageContent>
      <PageContent>
        <AccordionHeader>Movement</AccordionHeader>
      </PageContent>
      <Accordion>
        <AccordionSummary>Normal move</AccordionSummary>
        <AccordionDetails>
          When you pick a unit to make a normal move, you can move each model in
          that unit a distance in inches equal to or less than the Move
          characteristic shown on the unit's warscroll. Units cannot move within
          3" of enemy units when making a normal move. Units cannot make a
          normal move if they are within 3" of an enemy unit.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>Retreat</AccordionSummary>
        <AccordionDetails>
          When you pick a unit to retreat, you can move each model in that unit
          a distance in inches equal to or less than the Move characteristic
          shown on the unit's warscroll. The unit must end the move more than 3"
          from all enemy units. You cannot shoot or attempt a charge later in
          the turn with a unit that has retreated. Units cannot retreat if they
          are not within 3" of an enemy unit.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>Run</AccordionSummary>
        <AccordionDetails>
          When you pick a unit to run, you must make a run roll for the unit by
          rolling a dice. Add the run roll to the Move characteristic of all
          models in the unit until the end of that phase. You can then move each
          model in that unit a distance in inches equal to or less than their
          modified Move characteristic. No part of a run can be within 3" of an
          enemy unit. You cannot shoot or attempt a charge later in the turn
          with a unit that has run. Units cannot run if they are within 3" of an
          enemy unit.
        </AccordionDetails>
      </Accordion>
      <PageContent>
        <AccordionHeader>Command abilities</AccordionHeader>
      </PageContent>
      {currentTurn === "player" ? <PlayerTurn /> : <OpponentTurn />}
      <PhaseNavigation
        previousRoute="/phases/hero"
        previousRouteName="Hero"
        nextRoute="/phases/shooting"
        nextRouteName="Shooting"
      />
    </Page>
  );
};

export default MovementPhase;
