import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { ReactNode } from "react";
import { CurrentTurn } from "../gameSlice";

export interface TurnSelectProps {
  currentTurn: CurrentTurn;
  onChange:
    | ((event: SelectChangeEvent<CurrentTurn>, child: ReactNode) => void)
    | undefined;
}

const TurnSelect: React.FC<TurnSelectProps> = function ({
  currentTurn,
  onChange,
}) {
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="turn-select-input-label">Turn</InputLabel>
      <Select
        labelId="turn-select-label"
        id="turn-select"
        value={currentTurn}
        label="Age"
        onChange={onChange}
      >
        <MenuItem value={"player"}>You</MenuItem>
        <MenuItem value={"opponent"}>Opponent</MenuItem>
      </Select>
    </FormControl>
  );
};

export default TurnSelect;
