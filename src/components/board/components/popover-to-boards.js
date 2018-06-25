import React from "react";
import { connect } from "react-redux";
import { Col, Icon, Popover } from "antd";

import Boards from "./boards";
import { gotoBoard, deleteBoard } from "../actions";
import getBoardList from "../get-board-list-selector";

import "../board-style.css";

const popoverToBoards = ({ board, gotoBoard, deleteBoard }) => (
  <Col span={8} className="boards">
    <Popover
      content={
        <Boards board={board} gotoBoard={gotoBoard} deleteBoard={deleteBoard} />
      }
      placement="bottomLeft"
      title="All Boards"
    >
      <Icon
        className="boards-icon"
        type="database"
        style={{ color: "#ffffff", fontSize: 20, paddingLeft: "15px" }}
      />
    </Popover>
  </Col>
);

const mapStateToProps = state => ({ board: getBoardList(state) });

const mapDispatchToProps = { gotoBoard, deleteBoard };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(popoverToBoards);
