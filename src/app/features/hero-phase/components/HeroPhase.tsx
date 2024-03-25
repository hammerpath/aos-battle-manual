import PageContent from "../../../components/PageContent";
import { useAppSelector } from "../../../hooks";
import { selectCurrentTurn } from "../../game/gameSlice";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import Header from "../../../components/Header";
import PlayerTurn from "./PlayerTurn";
import OpponentTurn from "./OpponentTurn";
import AccordionSummary from "../../../components/accordion/AccordionSummary";

export interface HeroPhaseProps {}

const HeroPhase: React.FC<HeroPhaseProps> = function () {
  const currentTurn = useAppSelector(selectCurrentTurn);

  return (
    <>
      <PageContent>
        <Header>Start</Header>
      </PageContent>
      <Accordion>
        <AccordionSummary>General on battlefield</AccordionSummary>
        <AccordionDetails>Receive 1 command point.</AccordionDetails>
      </Accordion>
      <PageContent>
        <Header>Heroic Actions</Header>
      </PageContent>
      <Accordion>
        <AccordionSummary>Heroic Leadership</AccordionSummary>
        <AccordionDetails>
          Pick 1 friendly HERO and roll a dice. Add 2 to the roll if your
          general has been slain. On a 4+, you receive 1 command point that can
          only be spent during that turn to allow that HERO to issue a command.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>Heroic Willpower</AccordionSummary>
        <AccordionDetails>
          Pick 1 friendly HERO that is not a WIZARD. If it is the enemy hero
          phase, that HERO can attempt to unbind 1 spell in that phase as if
          they were a WIZARD. If it is your hero phase, that HERO can attempt to
          dispel 1 endless spell in that phase as if they were a WIZARD (you can
          still only attempt to unbind or dispel the same spell or endless spell
          once in the same phase).
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>Their Finest Hour</AccordionSummary>
        <AccordionDetails>
          Pick 1 friendly HERO. Add 1 to wound rolls for attacks made by that
          HERO until the end of that turn, and add 1 to save rolls for attacks
          that target that HERO until the end of that turn. You cannot carry out
          this heroic action with the same HERO more than once in the same
          battle.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>Heroic Recovery</AccordionSummary>
        <AccordionDetails>
          Pick 1 friendly HERO that is more than 3" from all enemy units and
          make a heroic recovery roll by rolling 2D6. If the roll is less than
          or equal to that HERO's Bravery characteristic, you can heal up to D3
          wounds allocated to that HERO.
        </AccordionDetails>
      </Accordion>
      {currentTurn === "mine" ? <PlayerTurn phase="hero" /> : <OpponentTurn />}
    </>
  );
};

export default HeroPhase;
