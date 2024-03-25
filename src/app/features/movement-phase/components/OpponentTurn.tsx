import { Accordion, AccordionDetails } from "@mui/material";
import AccordionSummary from "../../../components/accordion/AccordionSummary";
import PageContent from "../../../components/PageContent";
import AccordionHeader from "../../../components/AccordionHeader";
import { Content } from "../../phase/types";

export interface OpponentTurnProps {
  commandAbilitiesContent: Content[];
}

const OpponentTurn: React.FC<OpponentTurnProps> = function ({
  commandAbilitiesContent,
}) {
  return (
    <>
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
        <AccordionSummary>Redeploy</AccordionSummary>
        <AccordionDetails>
          You can use this command ability in the enemy movement phase after an
          enemy unit finishes a normal move, run or retreat. The unit that
          receives the command must be within 9" of that enemy unit and more
          than 3" from all enemy units. You can make a D6" move with the unit
          that receives the command, but it must finish the move more than 3"
          from all enemy units and cannot shoot later in the turn.
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default OpponentTurn;
