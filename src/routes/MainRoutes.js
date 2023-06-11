import { lazy } from "react";

import MainLayout from "../Layout/MainLayout";
import Loadable from "../Components/Loadable";

const DraggableWorkSpace = Loadable(
  lazy(() => import("../Layout/DraggableWorkSpace"))
);

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: <DraggableWorkSpace />,
    },
  ],
};

export default MainRoutes;
