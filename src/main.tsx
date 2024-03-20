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
import Root from "./app/routes/Root.tsx";
import PreRounds from "./app/features/pre-rounds/routes/PreRounds.tsx";
import Phase from "./app/features/phase/Phase.tsx";
import CreateGame from "./app/features/game/CreateGame.tsx";
import PhaseRoot from "./app/features/phase/routes/PhaseRoot.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <CreateGame />,
      },
      {
        path: "pre-rounds",
        element: (
          <Phase
            navigation={{
              previousRoute: "/",
              previousRouteName: "Settings",
              nextRoute: "/phases/hero",
              nextRouteName: "Hero",
            }}
          >
            <PreRounds />
          </Phase>
        ),
      },
      {
        path: "phases/:phase",
        element: <PhaseRoot />,
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
