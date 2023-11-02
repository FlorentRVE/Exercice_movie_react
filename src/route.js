import Home from "./component/home";
import Like from "./component/like";

import { createBrowserRouter } from "react-router-dom";

// Affectation des routes

const router = createBrowserRouter([

    { path: "/", element: <Home /> },

    { path: "/like", element: <Like /> },

]);

export default router;
