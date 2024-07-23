import LinkButton from "../../../../components/LinkButton";
import { Faction } from "../types";

export interface FactionListProps {
  factions: Faction[];
}

const FactionList: React.FC<FactionListProps> = function ({ factions }) {
  return (
    <ul>
      {factions.map((faction) => {
        return (
          <li>
            <LinkButton href={`/admin/factions/${faction.name}`}>
              {faction.name}
            </LinkButton>
          </li>
        );
      })}
    </ul>
  );
};

export default FactionList;
