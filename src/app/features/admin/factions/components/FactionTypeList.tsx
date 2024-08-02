import { useParams } from "react-router-dom";
import ArticleIcon from "@mui/icons-material/Article";
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { KeyboardArrowRight } from "@mui/icons-material";
import { useGetFactionTypesByFactionQuery } from "../../../faction-types/factionTypeService";
import Loader from "../../../loader/Loader";
import { useGetFactionByIdQuery } from "../../../faction/factionService";

interface FactionTypeListParams {
  factionId: string;
}

const FactionTypeList: React.FC = function () {
  const { factionId } = useParams() as Pick<FactionTypeListParams, "factionId">;
  const { data: factionTypes, isLoading: isFactionTypesLoading } =
    useGetFactionTypesByFactionQuery(factionId);
  const { data: faction, isLoading: isFactionLoading } =
    useGetFactionByIdQuery(factionId);

  if (isFactionTypesLoading || isFactionLoading) {
    return <Loader />;
  }

  if (factionTypes === undefined || faction === undefined) {
    return <div>No data</div>;
  }

  return (
    <>
      <Typography variant="h2">{faction.name}</Typography>
      <List>
        {factionTypes.map((factionType) => (
          <ListItem key={factionType.id}>
            <ListItemButton
              href={`/admin/factions/${factionId}/faction-types/${factionType.id}`}
            >
              <ListItemAvatar>
                <Avatar>
                  <ArticleIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={factionType.name} />
              <KeyboardArrowRight />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default FactionTypeList;
