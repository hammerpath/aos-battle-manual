import Phase from "../phase/components/Phase";
import StartOfTurn from "./components/StartOfTurn";

export interface StartOfTurnRootProps {}

const StartOfTurnRoot: React.FC<StartOfTurnRootProps> = function () {
  return (
    <Phase
      showHeader={false}
      navigation={{
        currentRoute: "Start of turn",
        previousRoute: "/",
        previousRouteName: "Settings",
        nextRoute: "/phases/hero",
        nextRouteName: "Hero",
      }}
    >
      <StartOfTurn />
    </Phase>
  );
};

export default StartOfTurnRoot;
