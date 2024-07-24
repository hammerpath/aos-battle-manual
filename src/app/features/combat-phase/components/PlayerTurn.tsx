import { Accordion, AccordionDetails } from "@mui/material";
import AccordionSummary from "../../../components/accordion/AccordionSummary";
import PageContent from "../../../components/PageContent";
import Header from "../../../components/Header";
import { CommandAbilities } from "../../armies/types";

export interface PlayerTurnProps {
  commandAbilities?: CommandAbilities[];
}

const PlayerTurn: React.FC<PlayerTurnProps> = function ({ commandAbilities }) {
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
        <AccordionSummary>All-out Attack (1 CP)</AccordionSummary>
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
