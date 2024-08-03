import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { ReactNode } from "react";

interface ArmySelectOptions {
  key: string;
  value: string;
}

export interface ArmySelectProps {
  chosenHeroName?: string;
  armyNames: ArmySelectOptions[];
  label: string;
  onChange:
    | ((event: SelectChangeEvent<string>, child: ReactNode) => void)
    | undefined;
}

const ArmySelect: React.FC<ArmySelectProps> = function ({
  chosenHeroName = "none",
  armyNames,
  label,
  onChange,
}) {
  return (
    <FormControl sx={{ m: 1 }} size="small">
      <InputLabel id="demo-simple-select-helper-label">{label}</InputLabel>
      <Select
        id="army-select"
        value={chosenHeroName}
        label={label}
        onChange={onChange}
      >
        <MenuItem value="none">None</MenuItem>
        {armyNames.map(({ key, value }) => {
          return (
            <MenuItem key={key} value={value}>
              {value}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default ArmySelect;
