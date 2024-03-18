import { Accordion, AccordionDetails } from "@mui/material";
import AccordionHeader from "../../../components/AccordionHeader";
import PageContent from "../../../components/PageContent";
import AccordionSummary from "../../../components/accordion/AccordionSummary";
import { useAppSelector } from "../../../hooks";
import { selectBattleTacticsEnabled } from "../../game-settings/gameSettingsSlice";

export interface PlayerTurnProps {}

const PlayerTurn: React.FC<PlayerTurnProps> = function () {
  const battleTacticsEnabled = useAppSelector(selectBattleTacticsEnabled);

  return (
    <>
      <PageContent>
        <AccordionHeader>Command abilities</AccordionHeader>
      </PageContent>
      <Accordion>
        <AccordionSummary>Rally</AccordionSummary>
        <AccordionDetails>
          The unit that receives the command must be more than 3" from all enemy
          units. Roll 1 dice for each slain model from that unit. For each 6,
          you can return 1 slain model to that unit. You can only return models
          to that unit that have a combined Wounds characteristic of 10 or less.
          For example, if the unit that received the command has a Wounds
          characteristic of 2, you can return a maximum of 5 models to that
          unit.
        </AccordionDetails>
      </Accordion>
      <PageContent>
        <AccordionHeader>Spells</AccordionHeader>
      </PageContent>
      <Accordion>
        <AccordionSummary>Cast spells</AccordionSummary>
        <AccordionDetails>
          Cast spell with friendly Wizard. TODO
        </AccordionDetails>
      </Accordion>
      {battleTacticsEnabled ? (
        <>
          <PageContent>
            <AccordionHeader>Battle tactic</AccordionHeader>
          </PageContent>
          <Accordion>
            <AccordionSummary>Break their Spirit</AccordionSummary>
            <AccordionDetails>
              Pick 1 enemy unit wholly within your opponent's territory. You
              complete this tactic if that unit is destroyed during this turn.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary>Broken Ranks</AccordionSummary>
            <AccordionDetails>
              Pick 1 unit from your opponent's starting army that is on the
              battlefield. You complete this tactic if that unit is destroyed
              during this turn.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary>Conquer</AccordionSummary>
            <AccordionDetails>
              Pick 1 objective marker on the battlefield that your opponent
              controls. You complete this tactic if you control that objective
              marker at the end of this turn.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary>Repel</AccordionSummary>
            <AccordionDetails>
              Pick 1 enemy unit wholly or partially within your territory. You
              complete this tactic if that unit is destroyed during this turn.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary>Seize the Centre</AccordionSummary>
            <AccordionDetails>
              You complete this tactic if there are more friendly than enemy
              models within 6" of the centre of the battlefield at the end of
              this turn.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary>Slay the Warlord</AccordionSummary>
            <AccordionDetails>
              You complete this tactic if the model chosen to be your opponent's
              general is slain during this turn.
            </AccordionDetails>
          </Accordion>
        </>
      ) : null}
    </>
  );
};

export default PlayerTurn;
