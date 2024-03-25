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
        <AccordionSummary>All-out Defence</AccordionSummary>
        <AccordionDetails>
          You can use this command ability when a friendly unit is picked as the
          target of an attack in the shooting or combat phase. That unit must
          receive the command. Add 1 to save rolls for attacks that target that
          unit until the end of that phase.
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default OpponentTurn;
