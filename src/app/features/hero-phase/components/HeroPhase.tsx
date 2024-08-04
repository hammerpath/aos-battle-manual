import PageContent from "../../../components/PageContent";
import { selectMyFactionTypeId } from "../../game/gameSlice";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import Header from "../../../components/Header";
import AccordionSummary from "../../../components/accordion/AccordionSummary";
import { useSelector } from "react-redux";
import { useGetAbilitiesByPhaseQuery } from "../../abilities/services/abilityService";
import Loader from "../../loader/Loader";
import AbilityList from "../../abilities/components/AbilityList";
import { useGetSpellsByFactionTypeIdQuery } from "../../spells/services/spellService";
import SpellList from "../../spells/components/SpellList";
import PrayerList from "../../prayers/components/PrayerList";
import { useGetPrayersByFactionTypeIdQuery } from "../../prayers/services/prayerService";

export interface HeroPhaseProps {}

const HeroPhase: React.FC<HeroPhaseProps> = function () {
  const factionTypeId = useSelector(selectMyFactionTypeId);
  const { data: abilities, isLoading: isAbilitiesLoading } =
    useGetAbilitiesByPhaseQuery(
      { factionTypeId: factionTypeId!, phase: "hero-phase" },
      {
        skip: factionTypeId === undefined,
      },
    );

  const { data: spells, isLoading: isSpellsLoading } =
    useGetSpellsByFactionTypeIdQuery(factionTypeId!);

  const { data: prayers, isLoading: isPrayersLoading } =
    useGetPrayersByFactionTypeIdQuery(factionTypeId!);

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
      <AbilityList abilities={abilities} />
      <SpellList spells={spells} />
      <PrayerList prayers={prayers} />
    </>
  );
};

export default HeroPhase;
