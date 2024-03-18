import { ReactNode } from "react";

export interface AccordionHeaderProps {
  children: ReactNode;
}

const AccordionHeader: React.FC<AccordionHeaderProps> = function ({
  children,
}) {
  return <div className="text-2xl">{children}</div>;
};

export default AccordionHeader;
