import { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = function ({ children }) {
  return <input type="button">{children}</input>;
};

export default Button;
