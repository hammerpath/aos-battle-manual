import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { useParams } from "react-router-dom";
import { useGetSpellsByFactionTypeQuery } from "../spellService";
import Loader from "../../../loader/Loader";

interface SpellListParams {
  factionId: string;
  factionTypeId: string;
}

const SpellList: React.FC = function () {
  const { factionId } = useParams() as Pick<SpellListParams, "factionId">;
  const { factionTypeId } = useParams() as Pick<
    SpellListParams,
    "factionTypeId"
  >;
  const { data: spells, isLoading } = useGetSpellsByFactionTypeQuery(
    factionTypeId!,
  );

  if (isLoading) {
    return <Loader />;
  }

  if (!spells) {
    return <div>No spells found</div>;
  }

  return (
    <List>
      {spells.map((spell) => {
        return (
          <ListItem key={spell.id}>
            <ListItemButton
              href={`/admin/factions/${factionId}/faction-types/${factionTypeId}/spells/${spell.id}`}
            >
              <ListItemText primary={spell.name} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};

export default SpellList;
