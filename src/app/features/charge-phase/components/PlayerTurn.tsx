import { Accordion, AccordionDetails } from "@mui/material";
import AccordionSummary from "../../../components/accordion/AccordionSummary";

export interface PlayerTurnProps {}

const PlayerTurn: React.FC<PlayerTurnProps> = function () {
  return (
    <Accordion>
      <AccordionSummary>Forward to Victory</AccordionSummary>
      <AccordionDetails>
        You can use this command ability after you make a charge roll for a
        friendly unit. That unit must receive the command. You can re-roll the
        charge roll for that unit.
      </AccordionDetails>
    </Accordion>
  );
};

export default PlayerTurn;
