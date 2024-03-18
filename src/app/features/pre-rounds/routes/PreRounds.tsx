import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import LinkButton from "../../../components/LinkButton";
import PageContent from "../../../components/PageContent";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { selectHasPriority, userHasPriority } from "../../game/gameSlice";
import { Button } from "@mui/material";
import { Page } from "../../../components/Page";

const PreRounds: React.FC = function () {
  const hasPriority = useAppSelector(selectHasPriority);

  const dispatch = useAppDispatch();

  return (
    <Page>
      <PageContent>
        <Button>Set up terrain</Button>
      </PageContent>
      <PageContent>
        <Button>Set up custom terrain</Button>
      </PageContent>
      <PageContent>
        <Button>Deploy units</Button>
      </PageContent>
      <PageContent>
        <Button onClick={() => dispatch(userHasPriority(!hasPriority))}>
          You have priority: {hasPriority ? <CheckIcon /> : <CloseIcon />}
        </Button>
      </PageContent>
      <PageContent>
        <LinkButton href={"/phases/hero"}>Start game</LinkButton>
      </PageContent>
    </Page>
  );
};

export default PreRounds;
