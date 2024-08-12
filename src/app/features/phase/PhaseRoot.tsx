import { useParams } from "react-router-dom";
import HeroPhase from "../hero-phase/components/HeroPhase";
import Phase from "./components/Phase";
import MovementPhase from "../movement-phase/components/MovementPhase";
import ShootingPhase from "../shooting-phase/components/ShootingPhase";
import ChargePhase from "../charge-phase/components/ChargePhase";
import CombatPhase from "../combat-phase/components/CombatPhase";
import PostRound from "../end-of-turn/components/EndOfTurn";
import { useGetGameSettingsQuery } from "../game/gameSettingsService";
import Loader from "../loader/Loader";

export interface PhaseRootProps {}

const PhaseRoot: React.FC<PhaseRootProps> = function () {
  // TODO - can this be typed to Phase?
  const { phase } = useParams<"phase">();
  const { data: gameSettings, isLoading: isGameSettingsLoading } =
    useGetGameSettingsQuery();

  if (isGameSettingsLoading) {
    return <Loader />;
  }

  if (!gameSettings) {
    return <div>Setup game first - TODO</div>;
  }

  switch (phase) {
    case "hero":
      return (
        <Phase
          navigation={{
            currentRoute: "Hero",
            previousRoute: "/start-of-turn",
            previousRouteName: "Game setup",
            nextRoute: "/phases/movement",
            nextRouteName: "Movement",
          }}
        >
          <HeroPhase gameSettings={gameSettings} />
        </Phase>
      );
    case "movement":
      return (
        <Phase
          navigation={{
            currentRoute: "Movement",
            previousRoute: "/phases/hero",
            previousRouteName: "Hero",
            nextRoute: "/phases/shooting",
            nextRouteName: "Shooting",
          }}
        >
          <MovementPhase gameSettings={gameSettings} />
        </Phase>
      );
    case "shooting":
      return (
        <Phase
          navigation={{
            currentRoute: "Shooting",
            previousRoute: "/phases/movement",
            previousRouteName: "Movement",
            nextRoute: "/phases/charging",
            nextRouteName: "Charging",
          }}
        >
          <ShootingPhase gameSettings={gameSettings} />
        </Phase>
      );
    case "charging":
      return (
        <Phase
          navigation={{
            currentRoute: "Charging",
            previousRoute: "/phases/shooting",
            previousRouteName: "Shooting",
            nextRoute: "/phases/combat",
            nextRouteName: "Combat",
          }}
        >
          <ChargePhase gameSettings={gameSettings} />
        </Phase>
      );
    case "combat":
      return (
        <Phase
          navigation={{
            currentRoute: "Combat",
            previousRoute: "/phases/charging",
            previousRouteName: "Charging",
            nextRoute: "/phases/end-of-turn",
            nextRouteName: "End of turn",
          }}
        >
          <CombatPhase gameSettings={gameSettings} />
        </Phase>
      );
    case "end-of-turn":
      return (
        <Phase
          navigation={{
            currentRoute: "End of turn",
            previousRoute: "/phases/combat",
            previousRouteName: "Combat",
            nextRoute: "/phases/hero",
            nextRouteName: "Hero",
          }}
        >
          <PostRound gameSettings={gameSettings} />
        </Phase>
      );
    default:
      return <></>;
  }
};

export default PhaseRoot;
