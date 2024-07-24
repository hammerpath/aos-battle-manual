import { useEffect, useState } from "react";
import { Warscroll } from "../types";
import WarscrollServiceImpl from "../WarscrollService";
import { useParams } from "react-router-dom";
import PetsIcon from "@mui/icons-material/Pets";
import {
  Avatar,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { KeyboardArrowRight } from "@mui/icons-material";

export interface WarscrollListProps {}

const WarscrollList: React.FC<WarscrollListProps> = function () {
  const { faction } = useParams<"faction">();
  const [warscrolls, setWarscrolls] = useState<Warscroll[]>([]);

  useEffect(() => {
    (async () => {
      const warscrollService = new WarscrollServiceImpl();
      // TODO - fix exclamation mark
      const w = await warscrollService.getByFactionName(faction!);
      setWarscrolls(w);
    })();
  }, [faction]);

  return (
    <>
      <Typography variant="h2">{faction} Warscrolls</Typography>
      <List>
        {warscrolls.map((warscroll) => {
          return (
            <ListItemButton
              href={`/admin/factions/${faction}/warscroll/${warscroll.name}`}
            >
              <ListItemAvatar>
                <Avatar>
                  <PetsIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={warscroll.name} />
              <KeyboardArrowRight />
            </ListItemButton>
          );
        })}
      </List>
    </>
  );
};

export default WarscrollList;
