import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import bearFactory, {
  ContextDeferredAuthProvider,
} from "@gooddata/sdk-backend-bear";
import { BackendProvider, WorkspaceProvider } from "@gooddata/sdk-ui";

import "@gooddata/sdk-ui-filters/styles/css/main.css";
import "@gooddata/sdk-ui-charts/styles/css/main.css";
import "@gooddata/sdk-ui-geo/styles/css/main.css";
import "@gooddata/sdk-ui-pivot/styles/css/main.css";
import "@gooddata/sdk-ui-kit/styles/css/main.css";
import "@gooddata/sdk-ui-ext/styles/css/main.css";

import App from "App";
import reportWebVitals from "./reportWebVitals";

const backend = bearFactory()
  .onHostname("https://fashion-police.on.gooddata.com") // this should be the domain where the GoodData platform is hosted
  .withAuthentication(new ContextDeferredAuthProvider());

ReactDOM.render(
  <React.StrictMode>
    <BackendProvider backend={backend}>
      <WorkspaceProvider workspace="f7k90nguqbpvexch1xkzometf8qzvbs9">
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </WorkspaceProvider>
    </BackendProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
