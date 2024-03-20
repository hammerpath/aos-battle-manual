import { CurrentTurn, userHasPriority } from "../gameSlice";
import { useAppDispatch } from "../../../hooks";
import TurnSelect from "./TurnSelect";

export interface HeaderProps {
  currentTurn: CurrentTurn;
}

const GameHeader: React.FC<HeaderProps> = function ({ currentTurn }) {
  const dispatch = useAppDispatch();

  return (
    <>
      <TurnSelect
        currentTurn={currentTurn}
        onChange={(event) =>
          // TODO - fix typings for value
          dispatch(userHasPriority(event.target.value === "mine"))
        }
      />
    </>
  );
};

export default GameHeader;
