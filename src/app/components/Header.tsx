import { ReactNode } from "react";

export interface HeaderProps {
  children: ReactNode;
}

const Header: React.FC<HeaderProps> = function ({ children }) {
  return <div className="text-2xl">{children}</div>;
};

export default Header;
