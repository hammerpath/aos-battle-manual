import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { ReactNode } from "react";
import { ArmyName } from "../../armies/types";

export interface ArmySelectProps {
  chosenHeroName?: "none" | ArmyName;
  armyNames: ArmyName[];
  label: string;
  onChange:
    | ((event: SelectChangeEvent<"none" | ArmyName>, child: ReactNode) => void)
    | undefined;
}

const ArmySelect: React.FC<ArmySelectProps> = function ({
  chosenHeroName = "none",
  armyNames,
  label,
  onChange,
}) {
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-simple-select-helper-label">{label}</InputLabel>
      <Select
        id="army-select"
        value={chosenHeroName}
        label={label}
        onChange={onChange}
      >
        <MenuItem value="none">None</MenuItem>
        {armyNames.map((name) => {
          return <MenuItem value={name}>{name}</MenuItem>;
        })}
      </Select>
    </FormControl>
  );
};

export default ArmySelect;
