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
