import { Accordion, AccordionDetails } from "@mui/material";
import AccordionSummary from "../../../components/accordion/AccordionSummary";

export interface OpponentTurnProps {}

const OpponentTurn: React.FC<OpponentTurnProps> = function () {
  return (
    <Accordion>
      <AccordionSummary>All-out Defence</AccordionSummary>
      <AccordionDetails>
        You can use this command ability when a friendly unit is picked as the
        target of an attack in the shooting or combat phase. That unit must
        receive the command. Add 1 to save rolls for attacks that target that
        unit until the end of that phase.
      </AccordionDetails>
    </Accordion>
  );
};

export default OpponentTurn;
