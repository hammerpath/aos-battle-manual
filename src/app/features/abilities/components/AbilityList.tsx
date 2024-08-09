import { Accordion, AccordionDetails } from "@mui/material";
import Header from "../../../components/Header";
import PageContent from "../../../components/PageContent";
import { Ability } from "../types";
import { useAppSelector } from "../../../hooks";
import { selectCurrentTurn } from "../../game/gameSlice";
import AccordionSummary from "../../../components/accordion/AccordionSummary";
import AbilityContent from "./AbilityContent";

export interface AbilityListProps {
  abilities?: Ability[];
}

const AbilityList: React.FC<AbilityListProps> = function ({ abilities }) {
  const currentTurn = useAppSelector(selectCurrentTurn);
  const filteredAbilities = abilities?.filter(
    (ability) =>
      !ability.turn || ability.turn === currentTurn || ability.turn === "any",
  );

  if (!filteredAbilities || filteredAbilities.length === 0) {
    return null;
  }

  return (
    <>
      <PageContent>
        <Header>Abilities</Header>
      </PageContent>
      {filteredAbilities.map((ability) => {
        return (
          <Accordion key={ability.id}>
            <AccordionSummary>
              {ability.name}{" "}
              {ability.commandPoints ? `(${ability.commandPoints} CP)` : ""}
            </AccordionSummary>
            <AccordionDetails>
              <AbilityContent ability={ability} />
            </AccordionDetails>
          </Accordion>
        );
      })}
    </>
  );
};

export default AbilityList;
