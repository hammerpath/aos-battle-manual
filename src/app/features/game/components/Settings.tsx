import { FormControlLabel, FormGroup, Switch } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import {
  selectBattleTacticsEnabled,
  selectGrandStrategiesEnabled,
  toggleBattleTactics,
  toggleGrandStrategies,
} from "../../game-settings/gameSettingsSlice";
import { getArmyNames } from "../../armies/Army";
import ArmySelect from "./ArmySelect";
import { ArmyName } from "../../armies/types";
import PageContentColumns from "../../../components/PageContentColumns";
import {
  chooseOpponentArmy,
  choosePlayerArmy,
  selectOpponentArmyName,
  selectPlayerArmyName,
} from "../gameSlice";

export interface SettingsProps {}

const Settings: React.FC<SettingsProps> = function () {
  const dispatch = useAppDispatch();
  const battleTacticsEnabled = useAppSelector(selectBattleTacticsEnabled);
  const grandStrategiesEnabled = useAppSelector(selectGrandStrategiesEnabled);
  const playerArmyName = useAppSelector(selectPlayerArmyName);
  const opponentArmyName = useAppSelector(selectOpponentArmyName);

  const armyNames = getArmyNames();

  return (
    <>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              onChange={() => dispatch(toggleBattleTactics())}
              checked={battleTacticsEnabled}
            />
          }
          label="Use Battle Tactics"
        />
        <FormControlLabel
          control={
            <Switch
              onChange={() => dispatch(toggleGrandStrategies())}
              checked={grandStrategiesEnabled}
            />
          }
          label="Use Grand Strategies"
        />
      </FormGroup>
      <PageContentColumns header={"Choose army"}>
        <ArmySelect
          armyNames={armyNames}
          chosenHeroName={playerArmyName}
          label="My army"
          onChange={(event) =>
            event.target.value === "none"
              ? dispatch(choosePlayerArmy(undefined))
              : // TODO - fix this cast
                dispatch(choosePlayerArmy(event.target.value as ArmyName))
          }
        />
        <ArmySelect
          armyNames={armyNames}
          chosenHeroName={opponentArmyName}
          label="Opponent army"
          onChange={(event) =>
            event.target.value === "none"
              ? dispatch(chooseOpponentArmy(undefined))
              : // TODO - fix this cast
                dispatch(chooseOpponentArmy(event.target.value as ArmyName))
          }
        />
      </PageContentColumns>
    </>
  );
};

export default Settings;
