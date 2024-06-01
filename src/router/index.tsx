import { createBrowserRouter } from "react-router-dom";
import { path } from "../constants";
import Home from "../pages/home";

import App from "../App";

export const router = createBrowserRouter([
  {
    path: path.APP,
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);
