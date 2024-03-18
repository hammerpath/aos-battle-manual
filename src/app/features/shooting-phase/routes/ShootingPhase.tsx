import { Accordion, AccordionDetails } from "@mui/material";
import AccordionHeader from "../../../components/AccordionHeader";
import { Page } from "../../../components/Page";
import PageContent from "../../../components/PageContent";
import GameHeader from "../../game/components/GameHeader";
import AccordionSummary from "../../../components/accordion/AccordionSummary";
import { useAppSelector } from "../../../hooks";
import { selectCurrentTurn } from "../../game/gameSlice";
import PhaseNavigation from "../../../components/PhaseNavigation";

export interface ShootingPhaseProps {}

const ShootingPhase: React.FC<ShootingPhaseProps> = function () {
  const currentTurn = useAppSelector(selectCurrentTurn);

  return (
    <Page>
      <PageContent>
        <GameHeader currentTurn={currentTurn} />
      </PageContent>
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
      <PhaseNavigation
        previousRoute="/phases/movement"
        previousRouteName="Movement"
        nextRoute="/phases/charge"
        nextRouteName="Charge"
      />
    </Page>
  );
};

export default ShootingPhase;
