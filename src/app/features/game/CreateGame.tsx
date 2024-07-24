import LinkButton from "../../components/LinkButton";
import { Page } from "../../components/Page";
import Settings from "./components/Settings";

export interface CreateGameProps {}

const CreateGame: React.FC<CreateGameProps> = function () {
  return (
    <Page>
      <Settings />
      <LinkButton href={"/start-of-turn"}>Start of turn</LinkButton>
    </Page>
  );
};

export default CreateGame;
