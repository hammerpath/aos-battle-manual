import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import LinkButton from "../../components/LinkButton";
import PageContent from "../../components/PageContent";
import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  deployArmy,
  placeCustomTerrain,
  placeTerrain,
  selectDeployedArmy,
  selectHasPriority,
  selectPlacedCustomTerrain,
  selectPlacedTerrain,
  userHasPriority,
} from "../game/gameSlice";
import { Button } from "@mui/material";

const PreRounds: React.FC = function () {
  const placedTerrain = useAppSelector(selectPlacedTerrain);
  const placedCustomTerrain = useAppSelector(selectPlacedCustomTerrain);
  const deployedArmy = useAppSelector(selectDeployedArmy);
  const hasPriority = useAppSelector(selectHasPriority);

  const dispatch = useAppDispatch();

  return (
    <div>
      <PageContent>
        <Button onClick={() => dispatch(placeTerrain())}>
          Set up terrain {placedTerrain ? <CheckIcon /> : null}
        </Button>
      </PageContent>
      <PageContent>
        <Button onClick={() => dispatch(placeCustomTerrain())}>
          Set up custom terrain {placedCustomTerrain ? <CheckIcon /> : null}
        </Button>
      </PageContent>
      <PageContent>
        <Button onClick={() => dispatch(deployArmy())}>
          Deploy units{deployedArmy ? <CheckIcon /> : null}
        </Button>
      </PageContent>
      <PageContent>
        <Button onClick={() => dispatch(userHasPriority(!hasPriority))}>
          You have priority? {hasPriority ? <CheckIcon /> : <CloseIcon />}
        </Button>
      </PageContent>
      <PageContent>
        <LinkButton href={"phases/hero"}>Start game</LinkButton>
      </PageContent>
    </div>
  );
};

export default PreRounds;
