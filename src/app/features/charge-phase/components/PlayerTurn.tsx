import { Accordion, AccordionDetails } from "@mui/material";
import AccordionSummary from "../../../components/accordion/AccordionSummary";
import PageContent from "../../../components/PageContent";
import Header from "../../../components/Header";
import { CommandAbilities } from "../../armies/types";

export interface PlayerTurnProps {
  commandAbilities?: CommandAbilities[];
}

const PlayerTurn: React.FC<PlayerTurnProps> = function ({ commandAbilities }) {
  return (
    <>
      <PageContent>
        <Header>Charge</Header>
      </PageContent>
      <Accordion>
        <AccordionSummary>Charge move</AccordionSummary>
        <AccordionDetails>
          When you attempt a charge with a unit, make a charge roll for the unit
          by rolling 2D6. You can then make a charge move with each model in
          that unit by moving the model a distance in inches that is equal to or
          less than the charge roll. The first model you move in a unit
          attempting a charge must finish the move within 1/2" of an enemy unit.
          If this is impossible, no models in the unit can make a charge move.
        </AccordionDetails>
      </Accordion>
      <PageContent>
        <Header>Command abilities</Header>
      </PageContent>
      {commandAbilities?.map((commandAbility, index) => {
        return (
          <Accordion key={index}>
            <AccordionSummary>{commandAbility.name}</AccordionSummary>
            <AccordionDetails>{commandAbility.description}</AccordionDetails>
          </Accordion>
        );
      })}
      <Accordion>
        <AccordionSummary>Forward to Victory (1 CP)</AccordionSummary>
        <AccordionDetails>
          You can use this command ability after you make a charge roll for a
          friendly unit. That unit must receive the command. You can re-roll the
          charge roll for that unit.
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default PlayerTurn;
