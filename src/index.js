import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { Provider as ReduxProvider } from "react-redux";
import store from "./reducer/store";

const MainContainer = () => (
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>
);

ReactDOM.render(<MainContainer />, document.getElementById("root"));
