import { useParams } from "react-router-dom";
import ArticleIcon from "@mui/icons-material/Article";
import {
  Avatar,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { KeyboardArrowRight } from "@mui/icons-material";

export interface FactionComponentProps {}

const FactionComponent: React.FC<FactionComponentProps> = function () {
  const { faction } = useParams<"faction">();

  return (
    <>
      <Typography variant="h2">{faction}</Typography>
      <List>
        <ListItemButton href={`/admin/factions/${faction}/warscroll`}>
          <ListItemAvatar>
            <Avatar>
              <ArticleIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Warscroll" />
          <KeyboardArrowRight />
        </ListItemButton>
      </List>
    </>
  );
};

export default FactionComponent;
