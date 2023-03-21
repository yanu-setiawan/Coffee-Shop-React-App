import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import router from "./router";

// import App from "./pages/app/App"; //pages home

const root = ReactDOM.createRoot(document.getElementById("root"));
// eslint-disable-next-line react/prop-types
function Run({ isStrict, children }) {
  if (isStrict) return <React.StrictMode>{children}</React.StrictMode>;
  return children;
}

root.render(
  // {/* props dimasukkan sebagai atribut */}
  <Run isStrict={true}>
    <RouterProvider router={router} />
  </Run>
);

reportWebVitals();
