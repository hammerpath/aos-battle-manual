import { Accordion, AccordionDetails } from "@mui/material";
import Header from "../../../components/Header";
import PageContent from "../../../components/PageContent";
import AccordionSummary from "../../../components/accordion/AccordionSummary";
import { useAppSelector } from "../../../hooks";
import { selectBattleTacticsEnabled } from "../../game-settings/gameSettingsSlice";
import { Ability } from "../../abilities/types";

export interface PlayerTurnProps {
  abilities?: Ability[];
}

const PlayerTurn: React.FC<PlayerTurnProps> = function ({ abilities }) {
  const battleTacticsEnabled = useAppSelector(selectBattleTacticsEnabled);

  return (
    <>
      <PageContent>
        <Header>Abilities</Header>
      </PageContent>
      {abilities?.map((ability) => {
        return (
          <Accordion key={ability.id}>
            <AccordionSummary>{ability.name}</AccordionSummary>
          </Accordion>
        );
      })}
      <PageContent>
        <Header>Spells</Header>
      </PageContent>
      {battleTacticsEnabled ? (
        <>
          <PageContent>
            <Header>Battle tactic</Header>
          </PageContent>
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
