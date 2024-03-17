import { Page } from "./app/components/Page";
import HeroPhase from "./app/features/phases/HeroPhase";

function App() {
  return (
    <div>
      <div className="text-center">Main header</div>
      <Page>
        <HeroPhase />
      </Page>
    </div>
  );
}

export default App;
