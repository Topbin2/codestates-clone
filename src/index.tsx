import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { setupStore } from "./store/store";
import { Provider } from "react-redux";
import { GlobalStyle } from "./assets/global/globalStyle";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.Fragment>
    <BrowserRouter>
      <Provider store={setupStore()}>
        <GlobalStyle />
        <App />
      </Provider>
    </BrowserRouter>
  </React.Fragment>
);
