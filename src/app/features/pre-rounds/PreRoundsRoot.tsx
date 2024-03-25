import Phase from "../phase/components/Phase";
import PreRounds from "./components/PreRounds";

export interface PreRoundsRootProps {}

const PreRoundsRoot: React.FC<PreRoundsRootProps> = function () {
  return (
    <Phase
      showHeader={false}
      navigation={{
        currentRoute: "Setup",
        previousRoute: "/",
        previousRouteName: "Settings",
        nextRoute: "/phases/hero",
        nextRouteName: "Hero",
      }}
    >
      <PreRounds />
    </Phase>
  );
};

export default PreRoundsRoot;
