import { Accordion, AccordionDetails } from "@mui/material";
import Header from "../../../components/Header";
import PageContent from "../../../components/PageContent";
import AccordionSummary from "../../../components/accordion/AccordionSummary";

export interface EndOfTurnProps {}

const EndOfTurn: React.FC<EndOfTurnProps> = function () {
  return (
    <>
      <PageContent>
        <Header>Command abilities</Header>
      </PageContent>
      <Accordion>
        <AccordionSummary>Power Through (1 CP)</AccordionSummary>
        <AccordionDetails>TODO</AccordionDetails>
      </Accordion>
      <PageContent>
        <Header>End of turn</Header>
      </PageContent>
      <Accordion>
        <AccordionSummary>Command Points</AccordionSummary>
        <AccordionDetails>
          If the battle did not end, all command points that the players have
          remaining are lost and a new battle round begins.
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default EndOfTurn;
