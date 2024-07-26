import { Page } from "./app/components/Page";
import StartOfTurn from "./app/features/start-of-turn/components/StartOfTurn";

function App() {
  return (
    <div>
      <div className="text-center">AoS Battle Manual</div>
      <Page>
        <StartOfTurn />
      </Page>
    </div>
  );
}

export default App;
