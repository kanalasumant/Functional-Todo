import React from "react";

import { Row } from "antd";

import CreateBoard from "./create-board";
import BoardsList from "./popover-to-boards";
import Title from "./title";

const Header = () => (
  <Row type="flex" align="middle" className="header">
    <BoardsList />
    <Title />
    <CreateBoard />
  </Row>
);

export default Header;
