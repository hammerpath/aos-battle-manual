import { Outlet } from "react-router-dom";
import Settings from "../features/game/components/Settings";

export interface RootProps {}

const Root: React.FC = function () {
  return (
    <>
      <div className="text-center">Main header</div>
      <Outlet />
      <Settings />
    </>
  );
};

export default Root;
