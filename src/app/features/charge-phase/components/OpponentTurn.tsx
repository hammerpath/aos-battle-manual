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
        <AccordionSummary>Unleash Hell</AccordionSummary>
        <AccordionDetails>
          You can use this command ability after an enemy unit finishes a charge
          move. The unit that receives the command must be within 6" of that
          enemy unit and more than 3" from all other enemy units. Models in the
          unit that receives the command that are within 6" of the target unit
          can shoot in that phase, but when they do so, you must subtract 1 from
          hit rolls for their attacks and they can only target the unit that
          made the charge move.
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default OpponentTurn;
