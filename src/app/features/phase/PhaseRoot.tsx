import { useParams } from "react-router-dom";
import HeroPhase from "../hero-phase/components/HeroPhase";
import Phase from "./components/Phase";
import MovementPhase from "../movement-phase/components/MovementPhase";
import ShootingPhase from "../shooting-phase/components/ShootingPhase";
import ChargePhase from "../charge-phase/components/ChargePhase";
import CombatPhase from "../combat-phase/components/CombatPhase";
import BattleshockPhase from "../battleshock-phase/components/BattleshockPhase";
import PostRound from "../post-round/components/PostRound";

export interface PhaseRootProps {}

const PhaseRoot: React.FC<PhaseRootProps> = function () {
  // TODO - can this be typed to Phase?
  const { phase } = useParams<"phase">();

  switch (phase) {
    case "hero":
      return (
        <Phase
          navigation={{
            currentRoute: "Hero",
            previousRoute: "/pre-rounds",
            previousRouteName: "Game setup",
            nextRoute: "/phases/movement",
            nextRouteName: "Movement",
          }}
        >
          <HeroPhase />
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
          <MovementPhase />
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
          <ShootingPhase />
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
          <ChargePhase />
        </Phase>
      );
    case "combat":
      return (
        <Phase
          navigation={{
            currentRoute: "Combat",
            previousRoute: "/phases/charging",
            previousRouteName: "Charging",
            nextRoute: "/phases/battleshock",
            nextRouteName: "Battleshock",
          }}
        >
          <CombatPhase />
        </Phase>
      );
    case "battleshock":
      return (
        <Phase
          navigation={{
            currentRoute: "Battleshock",
            previousRoute: "/phases/shooting",
            previousRouteName: "Shooting",
            nextRoute: "/phases/post-round",
            nextRouteName: "Post round",
          }}
        >
          <BattleshockPhase />
        </Phase>
      );
    case "post-round":
      return (
        <Phase
          navigation={{
            currentRoute: "Post-round",
            previousRoute: "/phases/battleshock",
            previousRouteName: "Battleshock",
            nextRoute: "/phases/hero",
            nextRouteName: "Hero",
          }}
        >
          <PostRound />
        </Phase>
      );
    default:
      return <></>;
  }
};

export default PhaseRoot;
