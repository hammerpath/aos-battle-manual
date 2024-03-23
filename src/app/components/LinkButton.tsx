import { Link as RouterLink } from "react-router-dom";
import Button from "@mui/material/Button";
import { ReactNode } from "react";

export interface LinkButtonProps {
  children: ReactNode;
  href: string;
}

const LinkButton: React.FC<LinkButtonProps> = function ({ children, href }) {
  return (
    <Button variant="outlined" component={RouterLink} to={href}>
      {children}
    </Button>
  );
};

export default LinkButton;
