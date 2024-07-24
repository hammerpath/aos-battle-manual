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
        <Header>Shooting</Header>
      </PageContent>
      <Accordion>
        <AccordionSummary>Shooting attacks</AccordionSummary>
        <AccordionDetails>
          When you make shooting attacks with a model, it attacks with any of
          the missile weapons it is armed with.
        </AccordionDetails>
      </Accordion>
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
    </>
  );
};

export default PlayerTurn;
