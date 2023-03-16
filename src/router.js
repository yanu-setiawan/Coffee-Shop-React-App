import { createBrowserRouter } from "react-router-dom";
import App from "./pages/app";
// import app from "./pages/app"

const router = createBrowserRouter([
  // eslint-disable-next-line react/react-in-jsx-scope
  { path: "/", element: <App /> },
]);

export default router;
