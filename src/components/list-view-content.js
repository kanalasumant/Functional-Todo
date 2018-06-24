import React, { createRef, Component } from "react";
import { connect } from "react-redux";
import { createList } from "../reducer/boards-reducer";
import { Input } from "antd";

import ListView from "./list-view";

class ListViewContent extends Component {
  textInputRef = createRef();

  createList = () => {
    const boardName = this.textInputRef.current.input.value;
    this.props.createList(boardName);
    this.textInputRef.current.input.value = "";
  };

  render() {
    return (
      <div className="main-board-view-content">
        <ListView />
        <div className="main-list-view-contain">
          <Input
            ref={this.textInputRef}
            onPressEnter={this.createList}
            placeholder="Add a list . . ."
            className="add-list-title"
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  createList
};

export default connect(
  null,
  mapDispatchToProps
)(ListViewContent);
