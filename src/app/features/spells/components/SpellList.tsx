import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import Header from "../../../components/Header";
import PageContent from "../../../components/PageContent";
import { Spell } from "../types";
import { useAppSelector } from "../../../hooks";
import { selectCurrentTurn } from "../../game/gameSlice";

export interface SpellListProps {
  spells?: Spell[];
}

const SpellList: React.FC<SpellListProps> = function ({ spells }) {
  const currentTurn = useAppSelector(selectCurrentTurn);

  if (currentTurn !== "mine") {
    return null;
  }

  if (!spells || spells.length === 0) {
    return null;
  }

  return (
    <>
      <PageContent>
        <Header>Spells</Header>
      </PageContent>
      {spells.map((spell) => {
        return (
          <Accordion key={spell.id}>
            <AccordionSummary>
              {spell.name} ({spell.value})
            </AccordionSummary>
            <AccordionDetails>
              {spell.declare ? (
                <>
                  <strong>Declare:</strong> {spell.declare}
                </>
              ) : null}
              <div className="pt-2">
                <strong>Effect:</strong> {spell.effect}
              </div>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </>
  );
};

export default SpellList;
