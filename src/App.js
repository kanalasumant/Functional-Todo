import React, { Fragment } from "react";

import Header from "./components/header/components/header";
import BoardView from "./components/main/board-view";

const App = () => (
  <Fragment>
    <Header />
    <BoardView />
  </Fragment>
);

export default App;
