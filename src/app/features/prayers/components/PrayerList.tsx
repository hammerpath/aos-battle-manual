import { Accordion, AccordionSummary } from "@mui/material";
import Header from "../../../components/Header";
import PageContent from "../../../components/PageContent";
import { Prayer } from "../types";
import { useAppSelector } from "../../../hooks";
import { selectCurrentTurn } from "../../game/gameSlice";

export interface PrayerListProps {
  prayers?: Prayer[];
}

const PrayerList: React.FC<PrayerListProps> = function ({ prayers }) {
  const currentTurn = useAppSelector(selectCurrentTurn);

  if (currentTurn !== "mine") {
    return null;
  }

  if (!prayers || prayers.length === 0) {
    return null;
  }

  return (
    <>
      <PageContent>
        <Header>Prayers</Header>
      </PageContent>
      {prayers.map((prayer) => {
        return (
          <Accordion key={prayer.id}>
            <AccordionSummary>
              {prayer.name} ({prayer.value})
            </AccordionSummary>
          </Accordion>
        );
      })}
    </>
  );
};

export default PrayerList;
