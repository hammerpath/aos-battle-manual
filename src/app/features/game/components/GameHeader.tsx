import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import { CurrentTurn } from "../gameSlice";

export interface HeaderProps {
  currentTurn: CurrentTurn;
}

const Header: React.FC<HeaderProps> = function ({ currentTurn }) {
  return (
    <div>
      Your turn: {currentTurn === "player" ? <CheckIcon /> : <CloseIcon />}
    </div>
  );
};

export default Header;
