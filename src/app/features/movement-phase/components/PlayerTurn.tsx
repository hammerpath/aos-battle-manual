import { Accordion, AccordionDetails } from "@mui/material";
import AccordionSummary from "../../../components/accordion/AccordionSummary";

export interface PlayerTurnProps {}

const PlayerTurn: React.FC<PlayerTurnProps> = function () {
  return (
    <Accordion>
      <AccordionSummary>At the Double</AccordionSummary>
      <AccordionDetails>
        You can use this command ability after you declare that a friendly unit
        will run. That unit must receive the command. The run roll is not made
        for that unit. Instead, 6" is added to that unit's Move characteristic
        in that phase. The unit is still considered to have run.
      </AccordionDetails>
    </Accordion>
  );
};

export default PlayerTurn;
