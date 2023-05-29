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
import PrivateRoute from "./utils/wrapper/private.route";
import { IsLogin } from "./utils/wrapper/private.route";

// import app from "./pages/app"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home name="Fazztrack" age={19} />,
    errorElement: <Error />,
    // errorElement: <Error />,
  },
  {
    path: "/login",
    element: (
      <IsLogin>
        <Login />
      </IsLogin>
    ),
    errorElement: <Error />,
  },
  {
    path: "/register",
    element: (
      <IsLogin>
        <Register />
      </IsLogin>
    ),
  },
  {
    path: "/forgot",
    element: (
      <IsLogin>
        <Forgot />
      </IsLogin>
    ),
  },
  { path: "/product", element: <Products />, errorElement: <Error /> },
  {
    path: "/history",
    element: (
      <PrivateRoute>
        <History />
      </PrivateRoute>
    ),
  },
  {
    path: "/product-details/:id",
    element: (
      <PrivateRoute>
        <Details />
      </PrivateRoute>
    ),
  },
  {
    path: "/yourcart",
    element: (
      <PrivateRoute>
        <Payments />
      </PrivateRoute>
    ),
  },
  {
    path: "/profile",
    element: (
      <PrivateRoute>
        <Profile />
      </PrivateRoute>
    ),
  },
]);

export default router;
