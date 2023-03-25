/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Forgot from "./pages/Forgot";
import Products from "./pages/Products";
import History from "./pages/history";
import Details from "./pages/Details";
import Payments from "./pages/Payments";
import Profile from "./pages/Profile";
import Error from "./pages/error";

// import app from "./pages/app"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home name="Fazztrack" age={19} />,
    errorElement: <Error />,
    // errorElement: <Error />,
  },
  { path: "/login", element: <Login />, errorElement: <Error /> },
  { path: "/register", element: <Register /> },
  { path: "/forgot", element: <Forgot /> },
  { path: "/product", element: <Products />, errorElement: <Error /> },
  { path: "/history", element: <History /> },
  { path: "/product-details", element: <Details /> },
  { path: "/payment", element: <Payments /> },
  { path: "/profile", element: <Profile /> },
]);

export default router;
