import List from "@mui/material/List";
import { Faction } from "../types";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ShieldIcon from "@mui/icons-material/Shield";
import {
  IconButton,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";

export interface FactionListProps {
  factions: Faction[];
}

const FactionList: React.FC<FactionListProps> = function ({ factions }) {
  const navigate = useNavigate();
  return (
    <List>
      {factions.map((faction) => {
        return (
          <ListItem
            key={faction.id}
            secondaryAction={
              <IconButton
                onClick={() => navigate(`/admin/factions/${faction.id}/edit`)}
                edge="end"
                aria-label="edit"
              >
                <EditIcon />
              </IconButton>
            }
          >
            <ListItemButton href={`/admin/factions/${faction.id}`}>
              <ListItemAvatar>
                <Avatar>
                  <ShieldIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={faction.name} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};

export default FactionList;
