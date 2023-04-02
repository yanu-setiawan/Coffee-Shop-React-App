/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import router from "./router";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./Redux/store";

// import App from "./pages/app/App"; //pages home

const root = ReactDOM.createRoot(document.getElementById("root"));
// eslint-disable-next-line react/prop-types
function Run({ isStrict, children }) {
  if (isStrict) return <React.StrictMode>{children}</React.StrictMode>;
  return children;
}

root.render(
  <Run isStrict={false}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </Run>
);

reportWebVitals();
