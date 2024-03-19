import PageContent from "../../../components/PageContent";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { selectHasPriority, userHasPriority } from "../../game/gameSlice";
import { Accordion } from "@mui/material";
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
