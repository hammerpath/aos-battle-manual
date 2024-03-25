import { Accordion, AccordionDetails } from "@mui/material";
import Header from "../../../components/Header";
import PageContent from "../../../components/PageContent";
import AccordionSummary from "../../../components/accordion/AccordionSummary";

export interface BattleshockPhaseProps {}

const BattleshockPhase: React.FC<BattleshockPhaseProps> = function () {
  return (
    <>
      <PageContent>
        <Header>Battleshock</Header>
      </PageContent>
      <Accordion>
        <AccordionSummary>Battleshock Test</AccordionSummary>
        <AccordionDetails>
          You must make a battleshock roll for each friendly unit that has to
          take a battleshock test. To make a battleshock roll, roll a dice and
          add the number of models in the unit that were slain in that turn to
          the roll. If the battleshock roll is greater than the unit's Bravery
          characteristic, the battleshock test has been failed. If the test is
          failed, for each point by which the battleshock roll exceeds the
          unit's Bravery characteristic, 1 model in that unit must flee. You
          decide which models flee. A model that flees is removed from play.
        </AccordionDetails>
      </Accordion>
      <PageContent>
        <Header>Command abilities</Header>
      </PageContent>
      <Accordion>
        <AccordionSummary>Inspiring Presence</AccordionSummary>
        <AccordionDetails>
          You can use this command ability at the start of the battleshock
          phase. The unit that receives the command does not have to take
          battleshock tests in that phase.
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default BattleshockPhase;
