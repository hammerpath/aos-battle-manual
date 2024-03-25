import { Accordion, AccordionDetails } from "@mui/material";
import Header from "../../../components/Header";
import PageContent from "../../../components/PageContent";
import AccordionSummary from "../../../components/accordion/AccordionSummary";

export interface PostRoundProps {}

const PostRound: React.FC<PostRoundProps> = function () {
  return (
    <>
      <PageContent>
        <Header>End of battle round</Header>
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
