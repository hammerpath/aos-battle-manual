import AccordionHeader from "../../components/AccordionHeader";
import LinkButton from "../../components/LinkButton";
import { Page } from "../../components/Page";
import Settings from "./components/Settings";

export interface CreateGameProps {}

const CreateGame: React.FC<CreateGameProps> = function () {
  return (
    <Page>
      <AccordionHeader>Settings</AccordionHeader>
      <Settings />
      <LinkButton href={"/pre-rounds"}>Game setup</LinkButton>
    </Page>
  );
};

export default CreateGame;
