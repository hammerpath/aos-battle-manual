import { Page } from "./app/components/Page";
import PreRounds from "./app/features/pre-rounds/routes/PreRounds";

function App() {
  return (
    <div>
      <div className="text-center">Main header</div>
      <Page>
        <PreRounds />
      </Page>
    </div>
  );
}

export default App;
