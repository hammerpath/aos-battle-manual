import BoxedLink from "../../components/BoxedLink";
import Header from "../../components/Header";
import PageContent from "../../components/PageContent";
import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  addCommandAbility,
  selectCommandPoints,
  subtractCommandAbility,
} from "../game/gameSlice";

export interface HeroPhaseProps {}

const HeroPhase: React.FC<HeroPhaseProps> = function () {
  const commandPoints = useAppSelector(selectCommandPoints);

  const dispatch = useAppDispatch();

  return (
    <div>
      <PageContent>
        <Header commandPoints={commandPoints} />
      </PageContent>
      <PageContent>
        <BoxedLink onClick={() => dispatch(addCommandAbility(1))}>
          General on battlefield?
        </BoxedLink>
      </PageContent>
      <PageContent>
        <BoxedLink onClick={() => dispatch(subtractCommandAbility(1))}>
          Perform heroic action
        </BoxedLink>
      </PageContent>
    </div>
  );
};

export default HeroPhase;
