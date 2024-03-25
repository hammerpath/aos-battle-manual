import { Outlet } from "react-router-dom";

export interface RootProps {}

const Root: React.FC<RootProps> = function () {
  return (
    <>
      <div className="pt-4 text-center text-3xl">AoS Battle Manual</div>
      <Outlet />
    </>
  );
};

export default Root;
