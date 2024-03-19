import { Accordion, AccordionDetails } from "@mui/material";
import AccordionHeader from "../../../components/AccordionHeader";
import PageContent from "../../../components/PageContent";
import AccordionSummary from "../../../components/accordion/AccordionSummary";

export type Content = {
  summary: string;
  details?: string;
};

export interface PhaseContentProps {
  header: string;
  content?: Content[];
}

const PhaseContent: React.FC<PhaseContentProps> = function ({
  header,
  content,
}) {
  return (
    <>
      <PageContent>
        <AccordionHeader>{header}</AccordionHeader>
      </PageContent>
      {content?.map((content, index) => {
        return (
          <Accordion key={index}>
            <AccordionSummary>{content.summary}</AccordionSummary>
            {content.details ?? (
              // TODO - something is weird with this rendering
              // When I change this to a static string, the rendering is correct.
              <AccordionDetails>{content.details}</AccordionDetails>
            )}
          </Accordion>
        );
      })}
    </>
  );
};

export default PhaseContent;
