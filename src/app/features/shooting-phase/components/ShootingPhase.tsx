import { Accordion, AccordionDetails } from "@mui/material";
import AccordionHeader from "../../../components/AccordionHeader";
import PageContent from "../../../components/PageContent";
import AccordionSummary from "../../../components/accordion/AccordionSummary";

export interface ShootingPhaseProps {}

const ShootingPhase: React.FC<ShootingPhaseProps> = function () {
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
    </>
  );
};

export default ShootingPhase;
