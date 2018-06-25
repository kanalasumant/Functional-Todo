import React, { Component } from "react";
import { connect } from "react-redux";
import { updateBoard } from "../board/actions";

import ListViewContent from "../list/list-view-content";
import ModalRenderProp from "../shared/modal-render-prop";

import filterBoardDetails from "./filter-board-details-selector";

import "./main-style.css";

class BoardView extends Component {
  updateBoard = ({ inputValue }) => this.props.updateBoard(inputValue);

  render() {
    if (this.props.boardList.length === 0) {
      return (
        <div className="no-boards">
          No Boards yet! Create one by clicking on the + in the top right
          corner.
        </div>
      );
    } else {
      return (
        <div className="main-board-view">
          <ModalRenderProp
            title="Update Board Name"
            performAction={this.updateBoard}
            render={({ onClick }) => (
              <h2 className="main-board-view-header" onClick={onClick}>
                {this.props.boardName}
              </h2>
            )}
          />
          <ListViewContent />
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  const { boardList, boardName } = filterBoardDetails(state.board);
  return { boardList, boardName };
};

const mapDispatchToProps = {
  updateBoard
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardView);
