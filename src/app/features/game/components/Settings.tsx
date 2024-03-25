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
import { choosePlayerArmy, selectPlayerArmyName } from "../gameSlice";
import AccordionHeader from "../../../components/AccordionHeader";

export interface SettingsProps {}

const Settings: React.FC<SettingsProps> = function () {
  const dispatch = useAppDispatch();
  const battleTacticsEnabled = useAppSelector(selectBattleTacticsEnabled);
  const grandStrategiesEnabled = useAppSelector(selectGrandStrategiesEnabled);
  const playerArmyName = useAppSelector(selectPlayerArmyName);

  const armyNames = getArmyNames();

  return (
    <>
      <div className="py-2">
        <AccordionHeader>Description</AccordionHeader>
        <div>
          Setup the game according to your liking using the settings. Choose a
          team from the list to get team specific information for the different
          phases.
        </div>
      </div>
      <div className="py-2">
        <AccordionHeader>Settings</AccordionHeader>
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
      </div>
      <PageContentColumns header={"Choose army"}>
        <ArmySelect
          armyNames={armyNames.sort()}
          chosenHeroName={playerArmyName}
          label="My army"
          onChange={(event) =>
            event.target.value === "none"
              ? dispatch(choosePlayerArmy(undefined))
              : // TODO - fix this cast
                dispatch(choosePlayerArmy(event.target.value as ArmyName))
          }
        />
      </PageContentColumns>
    </>
  );
};

export default Settings;
