import { useParams } from "react-router-dom";
import LinkButton from "../../../../components/LinkButton";

export interface FactionComponentProps {}

const FactionComponent: React.FC<FactionComponentProps> = function () {
  const { faction } = useParams<"faction">();

  return (
    <>
      <div>Faction for {faction}</div>
      <LinkButton href={`/admin/factions/${faction}/warscroll`}>
        Warscroll
      </LinkButton>
    </>
  );
};

export default FactionComponent;
