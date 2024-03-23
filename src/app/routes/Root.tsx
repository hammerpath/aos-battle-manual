import { Outlet } from "react-router-dom";

export interface RootProps {}

const Root: React.FC<RootProps> = function () {
  return (
    <>
      <div className="text-center">AoS Battle Manual</div>
      <Outlet />
    </>
  );
};

export default Root;
