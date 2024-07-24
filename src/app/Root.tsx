import { Outlet } from "react-router-dom";

export interface RootProps {}

const Root: React.FC<RootProps> = function () {
  return <Outlet />;
};

export default Root;
