import { Accordion, AccordionDetails } from "@mui/material";
import AccordionHeader from "../../../components/AccordionHeader";
import PageContent from "../../../components/PageContent";
import AccordionSummary from "../../../components/accordion/AccordionSummary";

export interface PlayerTurnProps {}

const PlayerTurn: React.FC<PlayerTurnProps> = function () {
  return (
    <>
      <PageContent>
        <AccordionHeader>Command abilities</AccordionHeader>
      </PageContent>
      <Accordion>
        <AccordionSummary>Rally</AccordionSummary>
        <AccordionDetails>
          The unit that receives the command must be more than 3" from all enemy
          units. Roll 1 dice for each slain model from that unit. For each 6,
          you can return 1 slain model to that unit. You can only return models
          to that unit that have a combined Wounds characteristic of 10 or less.
          For example, if the unit that received the command has a Wounds
          characteristic of 2, you can return a maximum of 5 models to that
          unit.
        </AccordionDetails>
      </Accordion>
      <PageContent>
        <AccordionHeader>Spells</AccordionHeader>
      </PageContent>
      <Accordion>
        <AccordionSummary>Cast spells</AccordionSummary>
        <AccordionDetails>
          Cast spell with friendly Wizard. TODO
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default PlayerTurn;
