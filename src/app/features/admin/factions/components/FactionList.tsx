import List from "@mui/material/List";
import { Faction } from "../types";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ShieldIcon from "@mui/icons-material/Shield";
import { ListItemButton, ListItemText } from "@mui/material";
import { KeyboardArrowRight } from "@mui/icons-material";

export interface FactionListProps {
  factions: Faction[];
}

const FactionList: React.FC<FactionListProps> = function ({ factions }) {
  return (
    <List>
      {factions.map((faction) => {
        return (
          <ListItemButton href={`/admin/factions/${faction.name}`}>
            <ListItemAvatar>
              <Avatar>
                <ShieldIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={faction.name} />
            <KeyboardArrowRight />
          </ListItemButton>
        );
      })}
    </List>
  );
};

export default FactionList;
