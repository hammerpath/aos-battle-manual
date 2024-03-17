import { BoxedLink } from "../../components/BoxedLink";
import CheckMark from "../../components/CheckMark";
import Cross from "../../components/Cross";
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

const PreRounds: React.FC = function () {
  const placedTerrain = useAppSelector(selectPlacedTerrain);
  const placedCustomTerrain = useAppSelector(selectPlacedCustomTerrain);
  const deployedArmy = useAppSelector(selectDeployedArmy);
  const hasPriority = useAppSelector(selectHasPriority);

  const dispatch = useAppDispatch();

  return (
    <div>
      <PageContent>
        <BoxedLink onClick={() => dispatch(placeTerrain())}>
          Set up terrain {placedTerrain ? <CheckMark /> : null}
        </BoxedLink>
      </PageContent>
      <PageContent>
        <BoxedLink onClick={() => dispatch(placeCustomTerrain())}>
          Set up custom terrain {placedCustomTerrain ? <CheckMark /> : null}
        </BoxedLink>
      </PageContent>
      <PageContent>
        <BoxedLink onClick={() => dispatch(deployArmy())}>
          Deploy units{deployedArmy ? <CheckMark /> : null}
        </BoxedLink>
      </PageContent>
      <PageContent>
        <BoxedLink onClick={() => dispatch(userHasPriority(!hasPriority))}>
          You have priority? {hasPriority ? <CheckMark /> : <Cross />}
        </BoxedLink>
      </PageContent>
      <PageContent>
        <BoxedLink>Start game</BoxedLink>
      </PageContent>
    </div>
  );
};

export default PreRounds;
