import React from "react";
import { connect } from "react-redux";

import filterBoardDetails from "./filter-board-details-selector";
import ListViewContent from "./list-view-content";

const BoardView = ({ boardName, boardList }) => {
  if (boardList.length === 0) {
    return (
      <div className="no-boards">
        No Boards yet! Create one by clicking on the + in the top right corner.
      </div>
    );
  } else {
    return (
      <div className="main-board-view">
        <h2 className="main-board-view-header">{boardName}</h2>
        <ListViewContent />
      </div>
    );
  }
};

const mapStateToProps = state => {
  const { boardList, boardName } = filterBoardDetails(state.board);
  return { boardList, boardName };
};

export default connect(
  mapStateToProps,
  null
)(BoardView);
