import { Accordion, AccordionDetails } from "@mui/material";
import AccordionSummary from "../../../components/accordion/AccordionSummary";
import PageContent from "../../../components/PageContent";
import Header from "../../../components/Header";
import { CommandAbilities } from "../../armies/types";

export interface OpponentTurnProps {
  commandAbilities?: CommandAbilities[];
}

const OpponentTurn: React.FC<OpponentTurnProps> = function ({
  commandAbilities,
}) {
  return (
    <>
      <PageContent>
        <Header>Command abilities</Header>
      </PageContent>
      {commandAbilities?.map((commandAbility, index) => {
        return (
          <Accordion key={index}>
            <AccordionSummary>{commandAbility.name}</AccordionSummary>
            <AccordionDetails>{commandAbility.description}</AccordionDetails>
          </Accordion>
        );
      })}
      <Accordion>
        <AccordionSummary>Covering Fire (1 CP)</AccordionSummary>
        <AccordionDetails>TODO</AccordionDetails>
      </Accordion>
    </>
  );
};

export default OpponentTurn;
