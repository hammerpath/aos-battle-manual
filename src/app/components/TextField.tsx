import MuiTextField from "@mui/material/TextField";

export interface TextFieldProps {
  id?: string;
  label?: string;
  onChange?:
    | React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
  defaultValue?: string;
  value?: string;
}

const TextField: React.FC<TextFieldProps> = function ({
  id,
  label,
  onChange,
  defaultValue,
  value,
  ...rest
}) {
  return (
    <MuiTextField
      id={id}
      label={label}
      variant="outlined"
      defaultValue={defaultValue}
      value={value}
      onChange={onChange}
      {...rest}
    />
  );
};

export default TextField;
