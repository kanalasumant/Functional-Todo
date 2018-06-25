import { CREATE_LIST, UPDATE_LIST, DELETE_LIST } from "./actions/actionTypes";

const initialState = {
  byId: {},
  allIds: [],
  currentId: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_LIST:
      const runningListId = state.currentId;
      return {
        byId: {
          ...state.byId,
          [runningListId]: {
            id: runningListId,
            boardId: action.payload.activeId,
            text: action.payload.listName
          }
        },
        allIds: state.allIds.concat([runningListId]),
        currentId: runningListId + 1
      };
    case UPDATE_LIST:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.payload.listId]: {
            ...state.byId[action.payload.listId],
            id: action.payload.listId,
            text: action.payload.listName
          }
        }
      };
    case DELETE_LIST:
      const listById = state.byId;
      const listID = action.payload + "";
      const { [listID]: tempListId, ...updatedListByIdObject } = listById;
      return {
        ...state,
        byId: updatedListByIdObject,
        allIds: state.allIds.filter(id => id !== action.payload)
      };
    default:
      return state;
  }
};
