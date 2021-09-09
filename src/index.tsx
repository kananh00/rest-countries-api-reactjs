import { create } from "mobx-persist";
import { Provider } from "mobx-react";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.scss";
import * as serviceWorker from "./serviceWorker";
import AppStore from "./Store";

const appStore = new AppStore();
const hydrate = create({
  storage: localStorage,
  jsonify: true
});

hydrate("appStore", appStore)
  .then(() => {
    ReactDOM.render(
      <Provider appStore={appStore}>
        <App />
      </Provider>,
      document.getElementById("root")
    );

    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: https://bit.ly/CRA-PWA
    serviceWorker.unregister();
  })
  .catch((error: any) => {
    console.error(error);
  });
