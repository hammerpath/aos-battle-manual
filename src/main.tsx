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
import HeroPhase from "./app/features/hero-phase/routes/HeroPhase.tsx";
import MovementPhase from "./app/features/movement-phase/routes/MovementPhase.tsx";
import Root from "./app/routes/Root.tsx";
import PreRounds from "./app/features/pre-rounds/routes/PreRounds.tsx";
import ShootingPhase from "./app/features/shooting-phase/routes/ShootingPhase.tsx";

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
        element: <HeroPhase />,
      },
      {
        path: "phases/movement",
        element: <MovementPhase />,
      },
      {
        path: "phases/shooting",
        element: <ShootingPhase />,
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
