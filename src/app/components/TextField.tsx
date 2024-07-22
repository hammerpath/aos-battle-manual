import MuiTextField from "@mui/material/TextField";

export interface TextFieldProps {
  id?: string;
  label?: string;
  onChange?:
    | React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
}

const TextField: React.FC<TextFieldProps> = function ({
  id,
  label,
  onChange,
  ...rest
}) {
  return (
    <MuiTextField
      id={id}
      label={label}
      variant="outlined"
      onChange={onChange}
      {...rest}
    />
  );
};

export default TextField;
