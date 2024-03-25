import { useAppSelector } from "../../../hooks";
import { selectCurrentTurn } from "../../game/gameSlice";
import PlayerTurn from "./PlayerTurn";
import OpponentTurn from "./OpponentTurn";
import PageContent from "../../../components/PageContent";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import AccordionHeader from "../../../components/AccordionHeader";
import { Content } from "../../phase/types";

export interface ChargePhaseProps {
  commandAbilitiesContent: Content[];
}

const ChargePhase: React.FC<ChargePhaseProps> = function ({
  commandAbilitiesContent,
}) {
  const currentTurn = useAppSelector(selectCurrentTurn);

  return (
    <>
      {currentTurn === "mine" ? (
        <PlayerTurn commandAbilitiesContent={commandAbilitiesContent} />
      ) : (
        <OpponentTurn commandAbilitiesContent={commandAbilitiesContent} />
      )}
      <PageContent>
        <AccordionHeader>Monstrous Rampage</AccordionHeader>
      </PageContent>
      <Accordion>
        <AccordionSummary>Roar</AccordionSummary>
        <AccordionDetails>
          Pick 1 enemy unit within 3" of this model and roll a dice. On a 3+,
          that unit cannot issue or receive commands in the following combat
          phase.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>Stomp</AccordionSummary>
        <AccordionDetails>
          Pick 1 enemy unit within 3" of this model that is not a MONSTER and
          roll a dice. On a 2+, that unit suffers D3 mortal wounds.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>Titanic Duel</AccordionSummary>
        <AccordionDetails>
          Pick 1 enemy MONSTER within 3" of this model. Add 1 to hit rolls for
          attacks made by this model that target that enemy MONSTER until the
          end of the following combat phase.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>Smash To Rubble</AccordionSummary>
        <AccordionDetails>
          Pick 1 faction terrain feature or defensible terrain feature within 3"
          of this model and roll a dice. On a 3+, the terrain feature is
          demolished if it was defensible, and the scenery rules on its
          warscroll cannot be used for the rest of the battle if it was a
          faction terrain feature.
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default ChargePhase;
