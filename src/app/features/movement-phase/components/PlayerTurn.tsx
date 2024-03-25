import { Accordion, AccordionDetails } from "@mui/material";
import AccordionSummary from "../../../components/accordion/AccordionSummary";
import PageContent from "../../../components/PageContent";
import AccordionHeader from "../../../components/AccordionHeader";
import { Content } from "../../phase/types";

export interface PlayerTurnProps {
  commandAbilitiesContent: Content[];
}

const PlayerTurn: React.FC<PlayerTurnProps> = function ({
  commandAbilitiesContent,
}) {
  return (
    <>
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
      {commandAbilitiesContent.map((content, index) => {
        return (
          <Accordion key={index}>
            <AccordionSummary>{content.summary}</AccordionSummary>
            <AccordionDetails>{content.details}</AccordionDetails>
          </Accordion>
        );
      })}
      <Accordion>
        <AccordionSummary>At the Double</AccordionSummary>
        <AccordionDetails>
          You can use this command ability after you declare that a friendly
          unit will run. That unit must receive the command. The run roll is not
          made for that unit. Instead, 6" is added to that unit's Move
          characteristic in that phase. The unit is still considered to have
          run.
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default PlayerTurn;
