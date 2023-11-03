import Home from "./component/home";
import Like from "./component/like";
import Error from "./component/error";

import { createHashRouter } from "react-router-dom";

// Affectation des routes

const router = createHashRouter([
  { path: "/", element: <Home /> },

  { path: "/like", element: <Like /> },

  { path: "/404", element: <Error /> },
]);

export default router;
