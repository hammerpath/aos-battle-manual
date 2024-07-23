import { useEffect, useState } from "react";
import FactionList from "../factions/components/FactionList";
import { Faction } from "../factions/types";
import FactionServiceImpl from "../factions/FactionService";

const Admin: React.FC = function () {
  const [factions, setFactions] = useState<Faction[]>([]);

  useEffect(() => {
    (async () => {
      const factionService = new FactionServiceImpl();
      const f = await factionService.getAll();
      setFactions(f);
    })();
  }, []);

  return <FactionList factions={factions} />;
};

export default Admin;
