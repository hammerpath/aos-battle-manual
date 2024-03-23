import { useAppSelector } from "../../../hooks";
import { getArmy } from "../../armies/Army";
import { selectMyArmyName } from "../../game/gameSlice";
import Phase from "../../phase/Phase";
import PreRounds from "./PreRounds";

export interface PreRoundsRootProps {}

const PreRoundsRoot: React.FC<PreRoundsRootProps> = function () {
  const armyName = useAppSelector(selectMyArmyName);
  const army = getArmy(armyName);

  return (
    <Phase
      showHeader={false}
      navigation={{
        previousRoute: "/",
        previousRouteName: "Settings",
        nextRoute: "/phases/hero",
        nextRouteName: "Hero",
      }}
    >
      <PreRounds
        grandStrategiesContent={army?.grandStrategies?.map((ability) => {
          return { summary: ability.name, details: ability.description };
        })}
      />
    </Phase>
  );
};

export default PreRoundsRoot;
