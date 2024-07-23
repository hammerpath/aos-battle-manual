import { Outlet } from "react-router-dom";

const AdminRootComponent: React.FC = function () {
  return (
    <>
      <div>Admin page</div>
      <Outlet />
    </>
  );
};

export default AdminRootComponent;
