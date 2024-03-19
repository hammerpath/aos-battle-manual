import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LinkButton from "./LinkButton";

export interface PhaseNavigationProps {
  previousRoute: string;
  previousRouteName: string;
  nextRoute: string;
  nextRouteName: string;
}

const PhaseNavigation: React.FC<PhaseNavigationProps> = function ({
  previousRoute,
  previousRouteName,
  nextRoute,
  nextRouteName,
}) {
  return (
    <div className="flex justify-between py-4">
      <LinkButton href={previousRoute}>
        <ArrowBackIcon /> {previousRouteName}
      </LinkButton>
      <LinkButton href={nextRoute}>
        {nextRouteName} <ArrowForwardIcon />
      </LinkButton>
    </div>
  );
};

export default PhaseNavigation;
