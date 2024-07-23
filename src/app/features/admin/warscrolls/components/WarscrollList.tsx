import { useEffect, useState } from "react";
import { Warscroll } from "../types";
import WarscrollServiceImpl from "../WarscrollService";
import { useParams } from "react-router-dom";
import LinkButton from "../../../../components/LinkButton";

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
      <div>Warscroll List</div>
      <ul>
        {warscrolls.map((warscroll) => {
          return (
            <li>
              <LinkButton
                href={`/admin/factions/${faction}/warscroll/${warscroll.name}`}
              >
                {warscroll.name}
              </LinkButton>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default WarscrollList;
