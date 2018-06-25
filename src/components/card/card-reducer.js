import { CREATE_CARD, UPDATE_CARD, DELETE_CARD } from "./actions/actionTypes";

const initialState = {
  byId: {},
  allIds: [],
  currentId: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CARD:
      const runningCardId = state.currentId;
      return {
        byId: {
          ...state.byId,
          [runningCardId]: {
            id: runningCardId,
            listId: action.payload.listId,
            text: action.payload.cardName
          }
        },
        allIds: state.allIds.concat([runningCardId]),
        currentId: runningCardId + 1
      };
    case UPDATE_CARD:
      const details = action.payload;
      return {
        ...state,
        byId: {
          ...state.byId,
          [details.cardId]: {
            ...state.byId[details.cardId],
            id: details.cardId,
            text: details.cardName
          }
        }
      };
    case DELETE_CARD:
      const cardById = state.byId;
      const cardID = action.payload + "";
      const { [cardID]: tempcardId, ...updatedcardByIdObject } = cardById;
      return {
        ...state,
        byId: updatedcardByIdObject,
        allIds: state.allIds.filter(id => id !== action.payload)
      };
    default:
      return state;
  }
};
