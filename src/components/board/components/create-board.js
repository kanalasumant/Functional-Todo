import React, { Component } from "react";
import { connect } from "react-redux";
import { createBoard } from "../actions";

import { Col, Icon } from "antd";

import ModalRenderProp from "../../shared/modal-render-prop";

import "../board-style.css";

class ModalToCreateBoard extends Component {
  createBoard = ({ inputValue }) => {
    const listName = inputValue;
    this.props.createBoard(listName);
  };

  render() {
    return (
      <Col span={8} className="create-board">
        <ModalRenderProp
          performAction={this.createBoard}
          title="Create New Board"
          render={({ onClick }) => (
            <Icon
              className="create-board-icon"
              type="plus"
              style={{ fontSize: 24, color: "#ffffff", paddingRight: "13px" }}
              onClick={onClick}
            />
          )}
        />
      </Col>
    );
  }
}

const mapDispatchToProps = {
  createBoard
};
export default connect(
  null,
  mapDispatchToProps
)(ModalToCreateBoard);
