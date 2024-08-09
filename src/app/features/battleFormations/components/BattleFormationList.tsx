import { Accordion, AccordionDetails } from "@mui/material";
import Header from "../../../components/Header";
import PageContent from "../../../components/PageContent";
import { BattleFormation } from "../types";
import AccordionSummary from "../../../components/accordion/AccordionSummary";
import AbilityContent from "../../abilities/components/AbilityContent";

export interface BattleFormationListProps {
  battleFormations: BattleFormation[];
}

const BattleFormationList: React.FC<BattleFormationListProps> = function ({
  battleFormations,
}) {
  return (
    <>
      <PageContent>
        <Header>Select a Battle Formation</Header>
      </PageContent>
      {battleFormations.map((battleFormation) => {
        return (
          <Accordion key={battleFormation.id}>
            <AccordionSummary>{battleFormation.name}</AccordionSummary>
            <AccordionDetails>
              <div className="pb-2">
                <strong>Ability: </strong>
                {battleFormation.ability.name}
              </div>
              <AbilityContent ability={battleFormation.ability} />
            </AccordionDetails>
          </Accordion>
        );
      })}
    </>
  );
};

export default BattleFormationList;
