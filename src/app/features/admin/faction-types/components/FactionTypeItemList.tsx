import { useParams } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { useGetFactionTypeByIdQuery } from "../../../faction-types/factionTypeService";
import Loader from "../../../loader/Loader";

interface FactionTypeItemListParams {
  factionId: string;
  factionTypeId: string;
}

const FactionTypeItemList: React.FC = function () {
  const { factionId } = useParams() as Pick<
    FactionTypeItemListParams,
    "factionId"
  >;
  const { factionTypeId } = useParams() as Pick<
    FactionTypeItemListParams,
    "factionTypeId"
  >;
  const { data: faction, isLoading } =
    useGetFactionTypeByIdQuery(factionTypeId);

  if (isLoading) {
    return <Loader />;
  }

  if (!faction) {
    return <div>No faction</div>;
  }

  return (
    <>
      <Typography variant="h2">{faction.name}</Typography>
      <List>
        <ListItem key="spells">
          <ListItemButton
            href={`/admin/factions/${factionId}/faction-types/${factionTypeId}/spells`}
          >
            <ListItemText primary="Spells" />
          </ListItemButton>
        </ListItem>
      </List>
    </>
  );
};

export default FactionTypeItemList;
