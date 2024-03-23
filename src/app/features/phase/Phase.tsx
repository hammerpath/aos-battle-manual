import { ReactNode } from "react";
import { Page } from "../../components/Page";
import PageContent from "../../components/PageContent";
import GameHeader from "../game/components/GameHeader";
import { useAppSelector } from "../../hooks";
import { selectCurrentTurn } from "../game/gameSlice";
import PhaseNavigation, {
  PhaseNavigationProps,
} from "../../components/PhaseNavigation";

export interface PhaseProps {
  children: ReactNode;
  navigation: PhaseNavigationProps;
  showHeader?: boolean;
}

const Phase: React.FC<PhaseProps> = function ({
  children,
  navigation: phaseNavigationProps,
  showHeader = true,
}) {
  const currentTurn = useAppSelector(selectCurrentTurn);

  return (
    <Page>
      {showHeader && (
        <PageContent>
          <GameHeader currentTurn={currentTurn} />
        </PageContent>
      )}
      {children}
      <PhaseNavigation {...phaseNavigationProps} />
    </Page>
  );
};

export default Phase;
