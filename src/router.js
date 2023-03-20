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

// import app from "./pages/app"

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/forgot", element: <Forgot /> },
  { path: "/product", element: <Products /> },
  { path: "/history", element: <History /> },
  { path: "/product-details", element: <Details /> },
  { path: "/payment", element: <Payments /> },
]);

export default router;
