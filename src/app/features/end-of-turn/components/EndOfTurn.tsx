import { Accordion, AccordionDetails } from "@mui/material";
import Header from "../../../components/Header";
import PageContent from "../../../components/PageContent";
import AccordionSummary from "../../../components/accordion/AccordionSummary";
import { useSelector } from "react-redux";
import { selectMyFactionTypeId } from "../../game/gameSlice";
import { useGetAbilitiesByPhaseQuery } from "../../abilities/services/abilityService";
import Loader from "../../loader/Loader";
import AbilityList from "../../abilities/components/AbilityList";

export interface EndOfTurnProps {}

const EndOfTurn: React.FC<EndOfTurnProps> = function () {
  const factionTypeId = useSelector(selectMyFactionTypeId);
  const { data: abilities, isLoading: isAbilitiesLoading } =
    useGetAbilitiesByPhaseQuery(
      { factionTypeId: factionTypeId!, phase: "combat-phase" },
      {
        skip: factionTypeId === undefined,
      },
    );

  if (isAbilitiesLoading || abilities === undefined) {
    return <Loader />;
  }

  return (
    <>
      <PageContent>
        <Header>Command abilities</Header>
      </PageContent>
      <Accordion>
        <AccordionSummary>Power Through (1 CP)</AccordionSummary>
        <AccordionDetails>TODO</AccordionDetails>
      </Accordion>
      <AbilityList abilities={abilities} />
      <PageContent>
        <Header>End of turn</Header>
      </PageContent>
      <Accordion>
        <AccordionSummary>Command Points</AccordionSummary>
        <AccordionDetails>
          If the battle did not end, all command points that the players have
          remaining are lost and a new battle round begins.
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default EndOfTurn;
