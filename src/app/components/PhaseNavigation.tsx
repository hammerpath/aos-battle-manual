import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LinkButton from "./LinkButton";

export interface PhaseNavigationProps {
  currentRoute: string;
  previousRoute: string;
  previousRouteName: string;
  nextRoute: string;
  nextRouteName: string;
}

const PhaseNavigation: React.FC<PhaseNavigationProps> = function ({
  currentRoute,
  previousRoute,
  nextRoute,
}) {
  return (
    <div className="pb-4">
      <div className="flex justify-between py-4">
        <LinkButton href={previousRoute}>
          <ArrowBackIcon />
        </LinkButton>
        <div className="text-2xl">{currentRoute} Phase</div>
        <LinkButton href={nextRoute}>
          <ArrowForwardIcon />
        </LinkButton>
      </div>
    </div>
  );
};

export default PhaseNavigation;
