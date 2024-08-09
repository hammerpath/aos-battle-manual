import { useState } from "react";
import FactionList from "../factions/components/FactionList";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import TextField from "../../../components/TextField";
import {
  useAddFactionMutation,
  useGetAllActiveFactionsQuery,
} from "../../faction/factionService";

const Admin: React.FC = function () {
  const [factionName, setFactionName] = useState<string>();
  const { data: factions } = useGetAllActiveFactionsQuery();
  const [addFaction] = useAddFactionMutation();

  return (
    <>
      {factions ? (
        <>
          <Typography variant="h2">Factions</Typography>
          <TextField
            label="Faction name"
            onChange={(event) => setFactionName(event.target.value)}
          ></TextField>
          <Button
            onClick={() => factionName && addFaction({ name: factionName })}
          >
            Add faction
          </Button>
          <FactionList factions={factions} />
        </>
      ) : (
        <>Loading</>
      )}
    </>
  );
};

export default Admin;
