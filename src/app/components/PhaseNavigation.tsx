import { ReactNode } from "react";

export interface PhaseNavigationProps {
  children: ReactNode;
}

const PhaseNavigation: React.FC<PhaseNavigationProps> = function ({
  children,
}) {
  return <div>{children}</div>;
};

export default PhaseNavigation;
