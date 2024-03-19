import { Outlet } from "react-router-dom";

export interface RootProps {}

const Root: React.FC = function () {
  return (
    <>
      <div className="text-center">Main header</div>
      <Outlet />
    </>
  );
};

export default Root;
