import { Accordion, AccordionDetails } from "@mui/material";
import AccordionSummary from "../../../components/accordion/AccordionSummary";
import PageContent from "../../../components/PageContent";
import AccordionHeader from "../../../components/AccordionHeader";

export interface PlayerTurnProps {}

const PlayerTurn: React.FC<PlayerTurnProps> = function () {
  return (
    <>
      <PageContent>
        <AccordionHeader>Shooting</AccordionHeader>
      </PageContent>
      <Accordion>
        <AccordionSummary>Shooting attacks</AccordionSummary>
        <AccordionDetails>
          When you make shooting attacks with a model, it attacks with any of
          the missile weapons it is armed with.
        </AccordionDetails>
      </Accordion>
      <PageContent>
        <AccordionHeader>Command abilities</AccordionHeader>
      </PageContent>
      <Accordion>
        <AccordionSummary>All-out Attack</AccordionSummary>
        <AccordionDetails>
          You can use this command ability when you pick a friendly unit to
          shoot in your shooting phase or fight in the combat phase. That unit
          must receive the command. Add 1 to hit rolls for attacks made by that
          unit until the end of that phase.
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default PlayerTurn;
