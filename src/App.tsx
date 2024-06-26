import { Page } from "./app/components/Page";
import PreRounds from "./app/features/pre-rounds/components/PreRounds";

function App() {
  return (
    <div>
      <div className="text-center">AoS Battle Manual</div>
      <Page>
        <PreRounds />
      </Page>
    </div>
  );
}

export default App;
