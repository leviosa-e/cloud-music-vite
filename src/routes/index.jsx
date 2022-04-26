import { Navigate } from "react-router-dom";
import Home from "../application/Home";
import Recommend from "../application/Recommend";

export const routeConfig = [
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Navigate to="/recommend" />,
      },
      {
        path: "/recommend",
        element: <Recommend />,
      },
    ],
  },
];
