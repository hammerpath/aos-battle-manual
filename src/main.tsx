import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import store from "./app/store";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// TODO - I don't think this is how you do it.
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import HeroPhase from "./app/features/hero-phase/components/HeroPhase.tsx";
import MovementPhase from "./app/features/movement-phase/components/MovementPhase.tsx";
import Root from "./app/routes/Root.tsx";
import PreRounds from "./app/features/pre-rounds/routes/PreRounds.tsx";
import ShootingPhase from "./app/features/shooting-phase/components/ShootingPhase.tsx";
import Phase from "./app/features/phase/Phase.tsx";
import ChargePhase from "./app/features/charge-phase/components/ChargePhase.tsx";
import CombatPhase from "./app/features/combat-phase/components/CombatPhase.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "pre-rounds",
        element: <PreRounds />,
      },
      {
        path: "phases/hero",
        element: (
          <Phase
            navigation={{
              previousRoute: "/pre-rounds",
              previousRouteName: "Pre-game",
              nextRoute: "/phases/movement",
              nextRouteName: "Movement",
            }}
          >
            <HeroPhase />
          </Phase>
        ),
      },
      {
        path: "phases/movement",
        element: (
          <Phase
            navigation={{
              previousRoute: "/phases/hero",
              previousRouteName: "Hero",
              nextRoute: "/phases/shooting",
              nextRouteName: "Shooting",
            }}
          >
            <MovementPhase />
          </Phase>
        ),
      },
      {
        path: "phases/shooting",
        element: (
          <Phase
            navigation={{
              previousRoute: "/phases/movement",
              previousRouteName: "Movement",
              nextRoute: "/phases/charging",
              nextRouteName: "Charging",
            }}
          >
            <ShootingPhase />
          </Phase>
        ),
      },
      {
        path: "phases/charging",
        element: (
          <Phase
            navigation={{
              previousRoute: "/phases/shooting",
              previousRouteName: "Shooting",
              nextRoute: "/phases/combat",
              nextRouteName: "Combat",
            }}
          >
            <ChargePhase />
          </Phase>
        ),
      },
      {
        path: "phases/combat",
        element: (
          <Phase
            navigation={{
              previousRoute: "/phases/charging",
              previousRouteName: "Charging",
              nextRoute: "/phases/battleshock",
              nextRouteName: "Battleshock",
            }}
          >
            <CombatPhase />
          </Phase>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
