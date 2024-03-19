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
          dispatch(userHasPriority(event.target.value === "player"))
        }
      />
    </>
  );
};

export default GameHeader;
