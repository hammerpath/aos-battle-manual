import { ReactNode } from "react";
import { Page } from "../../components/Page";
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
      <PhaseNavigation {...phaseNavigationProps} />
      {showHeader && <GameHeader currentTurn={currentTurn} />}
      {children}
    </Page>
  );
};

export default Phase;
