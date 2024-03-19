import { Accordion, AccordionDetails } from "@mui/material";
import AccordionSummary from "../../../components/accordion/AccordionSummary";
import PageContent from "../../../components/PageContent";
import AccordionHeader from "../../../components/AccordionHeader";

export interface PlayerTurnProps {}

const PlayerTurn: React.FC<PlayerTurnProps> = function () {
  return (
    <>
      <PageContent>
        <AccordionHeader>Charge</AccordionHeader>
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
        <AccordionHeader>Command abilities</AccordionHeader>
      </PageContent>
      <Accordion>
        <AccordionSummary>Forward to Victory</AccordionSummary>
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
