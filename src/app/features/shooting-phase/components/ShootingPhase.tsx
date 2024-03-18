import { Accordion, AccordionDetails } from "@mui/material";
import AccordionHeader from "../../../components/AccordionHeader";
import PageContent from "../../../components/PageContent";
import AccordionSummary from "../../../components/accordion/AccordionSummary";
import { useAppSelector } from "../../../hooks";
import { selectCurrentTurn } from "../../game/gameSlice";
import PlayerTurn from "./PlayerTurn";
import OpponentTurn from "./OpponentTurn";

export interface ShootingPhaseProps {}

const ShootingPhase: React.FC<ShootingPhaseProps> = function () {
  const currentTurn = useAppSelector(selectCurrentTurn);

  return (
    <>
      <PageContent>
        <AccordionHeader>Shooting</AccordionHeader>
      </PageContent>
      <Accordion>
        <AccordionSummary>Shooting attacks</AccordionSummary>
        <AccordionDetails>
          When you make shooting attacks with a model, it attacks with any of
          the missile weapons it is armed with.
        </AccordionDetails>
      </Accordion>
      <PageContent>
        <AccordionHeader>Command abilities</AccordionHeader>
      </PageContent>
      {currentTurn === "player" ? <PlayerTurn /> : <OpponentTurn />}
    </>
  );
};

export default ShootingPhase;
