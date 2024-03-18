import AccordionSummaryMui from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ReactNode } from "react";

export interface AccordionSummaryProps {
  children: ReactNode;
}

const AccordionSummary: React.FC<AccordionSummaryProps> = function ({
  children,
}) {
  return (
    <AccordionSummaryMui expandIcon={<ExpandMoreIcon />}>
      {children}
    </AccordionSummaryMui>
  );
};

export default AccordionSummary;
