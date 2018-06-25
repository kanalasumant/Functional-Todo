import React, { createRef, Component } from "react";
import { connect } from "react-redux";
import { createList } from "./actions";
import { Input } from "antd";

import ListView from "./list-view";

import "./list-style.css";

class ListViewContent extends Component {
  textInputRef = createRef();

  createList = () => {
    const listDetails = {
      listName: this.textInputRef.current.input.value,
      activeId: this.props.activeId
    };
    this.props.createList(listDetails);
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

const mapStateToProps = ({ board: { activeId } }) => ({
  activeId
});

const mapDispatchToProps = {
  createList
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListViewContent);
