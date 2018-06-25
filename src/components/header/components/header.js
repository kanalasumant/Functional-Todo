import React from "react";

import { Row } from "antd";

import CreateBoard from "../../board/components/create-board";
import BoardsList from "../../board/components/popover-to-boards";
import Title from "./title";

import "../header-style.css";

const Header = () => (
  <Row type="flex" align="middle" className="header">
    <BoardsList />
    <Title />
    <CreateBoard />
  </Row>
);

export default Header;
