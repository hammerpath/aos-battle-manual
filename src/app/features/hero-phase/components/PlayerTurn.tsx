import { Accordion, AccordionDetails } from "@mui/material";
import Header from "../../../components/Header";
import PageContent from "../../../components/PageContent";
import AccordionSummary from "../../../components/accordion/AccordionSummary";
import { useAppSelector } from "../../../hooks";
import { selectBattleTacticsEnabled } from "../../game-settings/gameSettingsSlice";
import { Phase } from "../../phase/types";
import { useArmy } from "../../armies/useArmy";

export interface PlayerTurnProps {
  phase: Phase;
}

const PlayerTurn: React.FC<PlayerTurnProps> = function ({ phase }) {
  const battleTacticsEnabled = useAppSelector(selectBattleTacticsEnabled);
  const { spells, battleTactics } = useArmy(phase);

  return (
    <>
      <PageContent>
        <Header>Spells</Header>
      </PageContent>
      {spells?.map((spell, index) => {
        return (
          <Accordion key={index}>
            <AccordionSummary>{spell.name}</AccordionSummary>
            <AccordionDetails>{spell.description}</AccordionDetails>
          </Accordion>
        );
      })}
      {battleTacticsEnabled ? (
        <>
          <PageContent>
            <Header>Battle tactic</Header>
          </PageContent>
          {battleTactics?.map((battleTactic, index) => {
            return (
              <Accordion key={index}>
                <AccordionSummary>{battleTactic.name}</AccordionSummary>
                <AccordionDetails>{battleTactic.description}</AccordionDetails>
              </Accordion>
            );
          })}
          <Accordion>
            <AccordionSummary>Slay the Entourage</AccordionSummary>
            <AccordionDetails>TODO</AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary>Do Not Waiver</AccordionSummary>
            <AccordionDetails>TODO</AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary>Attack on Two Fronts</AccordionSummary>
            <AccordionDetails>TODO</AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary>Take Their Land</AccordionSummary>
            <AccordionDetails>TODO</AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary>Seize the Centre</AccordionSummary>
            <AccordionDetails>TODO</AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary>Take the Flanks</AccordionSummary>
            <AccordionDetails>TODO</AccordionDetails>
          </Accordion>
        </>
      ) : null}
    </>
  );
};

export default PlayerTurn;
