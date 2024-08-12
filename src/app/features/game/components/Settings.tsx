import {
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Switch,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import {
  selectBattleTacticsEnabled,
  selectGrandStrategiesEnabled,
  toggleBattleTactics,
  toggleGrandStrategies,
} from "../../game-settings/gameSettingsSlice";
import PageContentColumns from "../../../components/PageContentColumns";
import Header from "../../../components/Header";
import { useGetAllActiveFactionsQuery } from "../../faction/factionService";
import Loader from "../../loader/Loader";
import { useGetFactionTypesByFactionIdQuery } from "../../faction-types/factionTypeService";
import { useState } from "react";
import {
  useAddGameSettingsMutation,
  useGetGameSettingsQuery,
} from "../gameSettingsService";

export interface SettingsProps {}

const Settings: React.FC<SettingsProps> = function () {
  const dispatch = useAppDispatch();
  const battleTacticsEnabled = useAppSelector(selectBattleTacticsEnabled);
  const grandStrategiesEnabled = useAppSelector(selectGrandStrategiesEnabled);

  const { data: gameSettings } = useGetGameSettingsQuery();

  const [factionId, setFactionId] = useState<string | undefined>(
    gameSettings?.factionId,
  );
  const [factionTypeId, setFactionTypeId] = useState<string | undefined>(
    gameSettings?.factionTypeId,
  );

  const { data: factions, isLoading: isFactionsLoading } =
    useGetAllActiveFactionsQuery();
  const { data: factionTypes, isLoading: isFactionTypesLoading } =
    useGetFactionTypesByFactionIdQuery(factionId!, {
      skip: !factionId,
    });
  const [addFactionTypeId] = useAddGameSettingsMutation();

  const handleFactionIdChange = (event: SelectChangeEvent<string>) => {
    setFactionId(
      event.target.value === "none" ? undefined : event.target.value,
    );
    setFactionTypeId(undefined);
    addFactionTypeId(undefined);
  };
  const handleFactionTypeIdChange = (event: SelectChangeEvent<string>) => {
    const value =
      event.target.value === "none" ? undefined : event.target.value;

    setFactionTypeId(value);
    if (value && factionId) {
      addFactionTypeId({ factionTypeId: value, factionId });
    }
  };

  if (isFactionsLoading || isFactionTypesLoading) {
    return <Loader />;
  }

  if (!factions) {
    return <div>Not found</div>;
  }

  return (
    <>
      <div className="py-2">
        <Header>Description</Header>
        <div>
          Setup the game according to your liking using the settings. Choose a
          team from the list to get team specific information for the different
          phases.
        </div>
      </div>
      <div className="py-2">
        <Header>Settings</Header>
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

      <PageContentColumns header={"Choose Faction"}>
        <FormControl>
          <InputLabel>Faction</InputLabel>
          <Select
            value={factionId ?? "none"}
            onChange={handleFactionIdChange}
            label="Faction"
          >
            <MenuItem key="none" value="none">
              None
            </MenuItem>
            {factions.map((faction) => {
              return (
                <MenuItem key={faction.id} value={faction.id}>
                  {faction.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </PageContentColumns>

      <PageContentColumns header={"Choose Faction Type"}>
        <FormControl>
          <InputLabel>Faction Type</InputLabel>
          <Select
            value={factionTypeId ?? "none"}
            onChange={handleFactionTypeIdChange}
            label="Faction Type"
          >
            <MenuItem key="none" value="none">
              None
            </MenuItem>
            {factionTypes?.map((faction) => {
              return (
                <MenuItem key={faction.id} value={faction.id}>
                  {faction.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </PageContentColumns>
    </>
  );
};

export default Settings;
