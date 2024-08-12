import PageContent from "../../../components/PageContent";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import Header from "../../../components/Header";
import AccordionSummary from "../../../components/accordion/AccordionSummary";
import { useGetAbilitiesByPhaseQuery } from "../../abilities/services/abilityService";
import Loader from "../../loader/Loader";
import AbilityList from "../../abilities/components/AbilityList";
import { useGetSpellsByFactionTypeIdQuery } from "../../spells/services/spellService";
import SpellList from "../../spells/components/SpellList";
import PrayerList from "../../prayers/components/PrayerList";
import { useGetPrayersByFactionTypeIdQuery } from "../../prayers/services/prayerService";
import PlayerTurn from "./PlayerTurn";
import OpponentTurn from "./OpponentTurn";
import { useSelector } from "react-redux";
import { selectCurrentTurn } from "../../game/gameSlice";
import { GameSettings } from "../../game/types";

export interface HeroPhaseProps {
  gameSettings: GameSettings;
}

const HeroPhase: React.FC<HeroPhaseProps> = function ({ gameSettings }) {
  const currentTurn = useSelector(selectCurrentTurn);
  const { data: abilities, isLoading: isAbilitiesLoading } =
    useGetAbilitiesByPhaseQuery({
      factionTypeId: gameSettings!.factionTypeId,
      phase: "hero-phase",
    });

  const { data: spells, isLoading: isSpellsLoading } =
    useGetSpellsByFactionTypeIdQuery(gameSettings.factionTypeId);

  const { data: prayers, isLoading: isPrayersLoading } =
    useGetPrayersByFactionTypeIdQuery(gameSettings.factionTypeId);

  if (isAbilitiesLoading || isSpellsLoading || isPrayersLoading) {
    return <Loader />;
  }

  return (
    <>
      <PageContent>
        <Header>Command abilities</Header>
      </PageContent>
      <Accordion>
        <AccordionSummary>Rally (1 CP)</AccordionSummary>
        <AccordionDetails>TODO</AccordionDetails>
      </Accordion>
      {currentTurn === "mine" ? <PlayerTurn /> : <OpponentTurn />}
      <AbilityList abilities={abilities} />
      <SpellList spells={spells} />
      <PrayerList prayers={prayers} />
    </>
  );
};

export default HeroPhase;
