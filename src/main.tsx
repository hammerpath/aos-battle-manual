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
import Root from "./app/Root.tsx";
import CreateGame from "./app/features/game/CreateGame.tsx";
import PhaseRoot from "./app/features/phase/PhaseRoot.tsx";
import StartOfTurnRoot from "./app/features/start-of-turn/StartOfTurnRoot.tsx";
import Admin from "./app/features/admin/components/Admin.tsx";
import FactionComponent from "./app/features/admin/factions/components/FactionComponent.tsx";
import AdminRootComponent from "./app/features/admin/components/AdminRootComponent.tsx";
import WarscrollList from "./app/features/admin/warscrolls/components/WarscrollList.tsx";
import EditWarscroll from "./app/features/admin/warscrolls/components/EditWarscroll.tsx";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {},
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "admin",
        element: <AdminRootComponent />,
        children: [
          {
            path: "",
            index: true,
            element: <Admin />,
          },
          {
            path: "factions/:faction",
            element: <FactionComponent />,
          },
          {
            path: "factions/:faction/warscroll",
            element: <WarscrollList />,
          },
          {
            path: "factions/:faction/warscroll/:name",
            element: <EditWarscroll />,
          },
        ],
      },

      {
        path: "/",
        element: <CreateGame />,
      },
      {
        path: "start-of-turn",
        element: <StartOfTurnRoot />,
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
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
);
