import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import { GlobalStyles } from "./ui";
import { persistor, store } from "./store/store";
import { Provider } from "react-redux";
import "./firebase";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <Provider store={store}>
    <HashRouter>
      <GlobalStyles />
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </HashRouter>
  </Provider>,
);
