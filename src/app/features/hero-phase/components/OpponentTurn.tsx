import { Accordion, AccordionDetails } from "@mui/material";
import AccordionHeader from "../../../components/AccordionHeader";
import PageContent from "../../../components/PageContent";
import AccordionSummary from "../../../components/accordion/AccordionSummary";

export interface OpponentTurnProps {}

const OpponentTurn: React.FC<OpponentTurnProps> = function () {
  return (
    <>
      <PageContent>
        <AccordionHeader>Spells</AccordionHeader>
      </PageContent>
      <Accordion>
        <AccordionSummary>Unbind spells</AccordionSummary>
        <AccordionDetails>Unbind spells. TODO</AccordionDetails>
      </Accordion>
    </>
  );
};

export default OpponentTurn;
