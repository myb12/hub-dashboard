import { lazy } from "react";

// project imports
import MainLayout from "../Layout/MainLayout";
import Loadable from "../Components/Loadable";

// sample page routing
const SamplePage = Loadable(lazy(() => import("../views/SamplePage")));
const WorkSpace = Loadable(lazy(() => import("../views/WorkSpace")));

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: <WorkSpace />,
    },
    {
      path: "dashboard",
      children: [
        {
          path: "default",
          element: <SamplePage />,
        },
      ],
    },
    {
      path: "sample-page",
      element: <SamplePage />,
    },
  ],
};

export default MainRoutes;
