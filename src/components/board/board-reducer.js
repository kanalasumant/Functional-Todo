import {
  CREATE_BOARD,
  UPDATE_BOARD,
  DELETE_BOARD,
  GOTO_BOARD
} from "./actions/actionTypes";

import updateId from "./helpers/filters";

const initialState = {
  byId: {},
  allIds: [],
  activeId: 0,
  currentId: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOARD:
      const runningBoardId = state.currentId;
      return {
        byId: {
          ...state.byId,
          [runningBoardId]: { id: runningBoardId, text: action.payload }
        },
        allIds: state.allIds.concat([runningBoardId]),
        activeId: runningBoardId,
        currentId: runningBoardId + 1
      };
    case UPDATE_BOARD:
      return {
        ...state,
        byId: {
          ...state.byId,
          [state.activeId]: {
            id: state.activeId,
            text: action.payload
          }
        }
      };
    case DELETE_BOARD:
      const boardById = state.byId;
      const boardID = action.payload + "";
      const { [boardID]: idToBeRemoved, ...updatedBoardByIdObject } = boardById;
      return {
        ...state,
        byId: updatedBoardByIdObject,
        activeId: updateId(idToBeRemoved, state),
        allIds: state.allIds.filter(id => id !== idToBeRemoved.id)
      };
    case GOTO_BOARD:
      return { ...state, activeId: action.payload };
    default:
      return state;
  }
};
