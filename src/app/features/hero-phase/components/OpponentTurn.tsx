import { Accordion, AccordionDetails } from "@mui/material";
import Header from "../../../components/Header";
import PageContent from "../../../components/PageContent";
import AccordionSummary from "../../../components/accordion/AccordionSummary";

export interface OpponentTurnProps {}

const OpponentTurn: React.FC<OpponentTurnProps> = function () {
  return (
    <>
      <Accordion>
        <AccordionSummary>Magical Intervention (1 CP)</AccordionSummary>
        <AccordionDetails>
          Lets you cast a spell or chant a prayer at -1 to the roll.
        </AccordionDetails>
      </Accordion>
      <PageContent>
        <Header>Spells</Header>
      </PageContent>
      <Accordion>
        <AccordionSummary>Unbind spells</AccordionSummary>
        <AccordionDetails>Unbind spells. TODO</AccordionDetails>
      </Accordion>
    </>
  );
};

export default OpponentTurn;
