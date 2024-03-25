import { Accordion, AccordionDetails } from "@mui/material";
import AccordionSummary from "../../../components/accordion/AccordionSummary";
import { Content } from "../../phase/types";
import PageContent from "../../../components/PageContent";
import AccordionHeader from "../../../components/AccordionHeader";

export interface PlayerTurnProps {
  commandAbilitiesContent: Content[];
}

const PlayerTurn: React.FC<PlayerTurnProps> = function ({
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
