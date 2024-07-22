import MuiBox from "@mui/material/Box";

export interface BoxProps {
  children?: React.ReactNode;
}

const Box: React.FC<BoxProps> = function ({ children }) {
  return <MuiBox component="form">{children}</MuiBox>;
};

export default Box;
