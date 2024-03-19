import PageContent from "../../../components/PageContent";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { selectHasPriority, userHasPriority } from "../../game/gameSlice";
import { Accordion, AccordionDetails } from "@mui/material";
import AccordionHeader from "../../../components/AccordionHeader";
import AccordionSummary from "../../../components/accordion/AccordionSummary";
import TurnSelect from "../../game/components/TurnSelect";

const PreRounds: React.FC = function () {
  const hasPriority = useAppSelector(selectHasPriority);

  const dispatch = useAppDispatch();

  return (
    <>
      <PageContent>
        <AccordionHeader>Game setup</AccordionHeader>
      </PageContent>
      <Accordion>
        <AccordionSummary>Set up terrain</AccordionSummary>
      </Accordion>
      <Accordion>
        <AccordionSummary>Set up custom terrain</AccordionSummary>
      </Accordion>
      <Accordion>
        <AccordionSummary>Deploy units</AccordionSummary>
      </Accordion>
      <Accordion>
        <AccordionSummary>Priority roll</AccordionSummary>
        <AccordionDetails>
          At the start of each battle round, the players must roll off. This is
          called the priority roll. The winner has priority in that battle round
          and must decide who will take the first turn and who will take the
          second turn. In the event of a tied priority roll, do not roll off
          again. Instead, if it is the first battle round, the player who
          finished deploying their army first has priority. Otherwise, the
          player who went first in the previous battle round has priority.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>Command points</AccordionSummary>
        <AccordionDetails>
          After determining who will take which turn, the player who will take
          the first turn receives 1 command point and the player who will take
          the second turn receives 2 command points.
        </AccordionDetails>
      </Accordion>
      <PageContent>
        <AccordionHeader>Who's turn</AccordionHeader>
      </PageContent>
      <TurnSelect
        currentTurn={hasPriority ? "player" : "opponent"}
        onChange={(event) =>
          dispatch(userHasPriority(event.target.value === "player"))
        }
      />
    </>
  );
};

export default PreRounds;
