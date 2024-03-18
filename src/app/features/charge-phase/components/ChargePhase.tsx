import { Accordion, AccordionDetails } from "@mui/material";
import AccordionHeader from "../../../components/AccordionHeader";
import PageContent from "../../../components/PageContent";
import AccordionSummary from "../../../components/accordion/AccordionSummary";
import { useAppSelector } from "../../../hooks";
import { selectCurrentTurn } from "../../game/gameSlice";
import PlayerTurn from "./PlayerTurn";
import OpponentTurn from "./OpponentTurn";

export interface ChargePhaseProps {}

const ChargePhase: React.FC<ChargePhaseProps> = function () {
  const currentTurn = useAppSelector(selectCurrentTurn);

  return (
    <>
      <PageContent>
        <AccordionHeader>Charge</AccordionHeader>
      </PageContent>
      <Accordion>
        <AccordionSummary>Charge move</AccordionSummary>
        <AccordionDetails>
          When you attempt a charge with a unit, make a charge roll for the unit
          by rolling 2D6. You can then make a charge move with each model in
          that unit by moving the model a distance in inches that is equal to or
          less than the charge roll. The first model you move in a unit
          attempting a charge must finish the move within 1/2" of an enemy unit.
          If this is impossible, no models in the unit can make a charge move.
        </AccordionDetails>
      </Accordion>
      <PageContent>
        <AccordionHeader>Command abilities</AccordionHeader>
      </PageContent>
      {currentTurn === "player" ? <PlayerTurn /> : <OpponentTurn />}
    </>
  );
};

export default ChargePhase;
