import MuiTextField from "@mui/material/TextField";

export interface TextFieldProps {
  id?: string;
  label?: string;
  onChange?:
    | React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
  defaultValue?: string;
}

const TextField: React.FC<TextFieldProps> = function ({
  id,
  label,
  onChange,
  defaultValue,
  ...rest
}) {
  return (
    <MuiTextField
      id={id}
      label={label}
      variant="outlined"
      defaultValue={defaultValue}
      onChange={onChange}
      {...rest}
    />
  );
};

export default TextField;
