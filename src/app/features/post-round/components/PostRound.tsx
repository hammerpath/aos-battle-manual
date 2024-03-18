import { Accordion, AccordionDetails } from "@mui/material";
import AccordionHeader from "../../../components/AccordionHeader";
import PageContent from "../../../components/PageContent";
import AccordionSummary from "../../../components/accordion/AccordionSummary";

export interface PostRoundProps {}

const PostRound: React.FC<PostRoundProps> = function () {
  return (
    <>
      <PageContent>
        <AccordionHeader>End of battle round</AccordionHeader>
      </PageContent>
      <Accordion>
        <AccordionSummary>Command Points</AccordionSummary>
        <AccordionDetails>
          If the battle did not end, all command points that the players have
          remaining are lost and a new battle round begins.
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default PostRound;
