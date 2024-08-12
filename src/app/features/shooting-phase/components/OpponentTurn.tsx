import { Accordion, AccordionDetails } from "@mui/material";
import AccordionSummary from "../../../components/accordion/AccordionSummary";
import PageContent from "../../../components/PageContent";
import Header from "../../../components/Header";

export interface OpponentTurnProps {}

const OpponentTurn: React.FC<OpponentTurnProps> = function () {
  return (
    <>
      <PageContent>
        <Header>Command abilities</Header>
      </PageContent>
      <Accordion>
        <AccordionSummary>All-out Defense (1 CP)</AccordionSummary>
        <AccordionDetails>
          You can use this command ability when a friendly unit is picked as the
          target of an attack in the shooting or combat phase. That unit must
          receive the command. Add 1 to save rolls for attacks that target that
          unit until the end of that phase.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>Covering Fire (1 CP)</AccordionSummary>
        <AccordionDetails>TODO</AccordionDetails>
      </Accordion>
    </>
  );
};

export default OpponentTurn;
