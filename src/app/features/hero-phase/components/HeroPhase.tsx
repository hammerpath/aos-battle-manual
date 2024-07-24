import PageContent from "../../../components/PageContent";
import { useAppSelector } from "../../../hooks";
import { selectCurrentTurn } from "../../game/gameSlice";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import Header from "../../../components/Header";
import PlayerTurn from "./PlayerTurn";
import OpponentTurn from "./OpponentTurn";
import AccordionSummary from "../../../components/accordion/AccordionSummary";

export interface HeroPhaseProps {}

const HeroPhase: React.FC<HeroPhaseProps> = function () {
  const currentTurn = useAppSelector(selectCurrentTurn);

  return (
    <>
      <PageContent>
        <Header>Command abilities</Header>
      </PageContent>
      <Accordion>
        <AccordionSummary>Rally (1 CP)</AccordionSummary>
        <AccordionDetails>TODO</AccordionDetails>
      </Accordion>
      {currentTurn === "mine" ? <PlayerTurn phase="hero" /> : <OpponentTurn />}
    </>
  );
};

export default HeroPhase;
