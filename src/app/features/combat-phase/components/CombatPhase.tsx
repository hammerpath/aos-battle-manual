import { Accordion, AccordionDetails } from "@mui/material";
import AccordionHeader from "../../../components/AccordionHeader";
import AccordionSummary from "../../../components/accordion/AccordionSummary";
import PageContent from "../../../components/PageContent";
import { useAppSelector } from "../../../hooks";
import { selectCurrentTurn } from "../../game/gameSlice";
import PlayerTurn from "./PlayerTurn";
import OpponentTurn from "./OpponentTurn";

export interface CombatPhaseProps {}

const CombatPhase: React.FC<CombatPhaseProps> = function () {
  const currentTurn = useAppSelector(selectCurrentTurn);

  return (
    <>
      <PageContent>
        <AccordionHeader>Prepare for Combat</AccordionHeader>
      </PageContent>
      <Accordion>
        <AccordionSummary>Fight or Pass</AccordionSummary>
        <AccordionDetails>
          You must either pick 1 eligible friendly unit to fight or you must
          pass. A unit is eligible to fight if it is within 3" of an enemy unit
          and it has not fought in that phase, or if it made a charge move in
          the same turn and it has not fought in that phase. You cannot pass if
          there is a friendly unit that is eligible to fight. If you pass, you
          do nothing and the option to fight or pass goes back to your opponent.
          If both players pass in succession, the combat phase ends unless there
          are any units with strike-last effects.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>Pile in</AccordionSummary>
        <AccordionDetails>
          You can move a model making a pile-in move up to 3". When you make a
          pile-in move with a model, it must finish the move no further from the
          nearest enemy unit than it was at the start of the move.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>Pick target</AccordionSummary>
        <AccordionDetails>
          When you shoot or fight with a unit, before you make any attacks, you
          must pick the target unit (or units) for all of the attacks that will
          be made by the models in the unit. Only enemy units can be picked as
          the target for an attack. Once the targets for the unit's attacks have
          been picked, you can make the attacks in the order you wish.
        </AccordionDetails>
      </Accordion>
      <PageContent>
        <AccordionHeader>Command abilities</AccordionHeader>
      </PageContent>
      {currentTurn === "mine" ? <PlayerTurn /> : <OpponentTurn />}
      <PageContent>
        <AccordionHeader>Attack (TODO)</AccordionHeader>
      </PageContent>
    </>
  );
};

export default CombatPhase;
