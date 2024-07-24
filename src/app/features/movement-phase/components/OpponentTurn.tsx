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
        <AccordionSummary>Redeploy (1 CP)</AccordionSummary>
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
