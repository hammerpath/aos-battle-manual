import { Backdrop, CircularProgress } from "@mui/material";

export interface LoaderProps {}

const Loader: React.FC<LoaderProps> = function () {
  return (
    <Backdrop open>
      <CircularProgress />
    </Backdrop>
  );
};

export default Loader;
