import { FormControlLabel, FormGroup, Switch } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import {
  selectBattleTacticsEnabled,
  toggleBattleTactics,
} from "../../game-settings/gameSettingsSlice";

export interface SettingsProps {}

const Settings: React.FC<SettingsProps> = function () {
  const dispatch = useAppDispatch();
  const battleTacticsEnabled = useAppSelector(selectBattleTacticsEnabled);

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
      </FormGroup>
    </>
  );
};

export default Settings;
