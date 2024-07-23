import MuiAutocomplete from "@mui/material/Autocomplete";
import Chip from "@mui/material/Chip";
import TextField from "./TextField";

export interface AutoCompleteProps {
  id?: string;
  options?: string[];
  label?: string;
  value?: string[];
  onChange?: (value: string[]) => void;
}

const AutoComplete: React.FC<AutoCompleteProps> = function ({
  id,
  options,
  label,
  value,
  onChange,
}) {
  const handleOnChange = (
    _event: React.SyntheticEvent<Element, Event>,
    value: string[],
  ) => {
    onChange?.(value);
  };

  return (
    <MuiAutocomplete
      multiple
      freeSolo
      id={id}
      value={value}
      options={options ? options.map((option) => option) : []}
      renderTags={(value: readonly string[], getTagProps) =>
        value.map((option: string, index: number) => {
          const { key, ...tagProps } = getTagProps({ index });
          return (
            <Chip variant="outlined" label={option} key={key} {...tagProps} />
          );
        })
      }
      renderInput={(params) => <TextField {...params} label={label} />}
      onChange={handleOnChange}
    />
  );
};

export default AutoComplete;
