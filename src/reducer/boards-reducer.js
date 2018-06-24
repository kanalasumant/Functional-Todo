import updateId from "./helpers/filters";

const CREATE_BOARD = "CREATE_BOARD";
const UPDATE_BOARD = "UPDATE_BOARD";
const DELETE_BOARD = "DELETE_BOARD";
const GOTO_BOARD = "GOTO_BOARD";
const CREATE_LIST = "CREATE_LIST";
const UPDATE_LIST = "UPDATE_LIST";
const DELETE_LIST = "DELETE_LIST";
const CREATE_CARD = "CREATE_CARD";
const UPDATE_CARD = "UPDATE_CARD";
const DELETE_CARD = "DELETE_CARD";

export const createBoard = boardName => ({ type: CREATE_BOARD, boardName });
export const updateBoard = boardName => ({
  type: UPDATE_BOARD,
  boardName
});
export const deleteBoard = boardId => ({ type: DELETE_BOARD, boardId });
export const gotoBoard = boardId => ({ type: GOTO_BOARD, boardId });
export const createList = listName => ({ type: CREATE_LIST, listName });
export const updateList = listDetails => ({ type: UPDATE_LIST, listDetails });
export const deleteList = listId => ({ type: DELETE_LIST, listId });
export const createCard = cardDetails => ({ type: CREATE_CARD, cardDetails });
export const updateCard = cardDetails => ({ type: UPDATE_CARD, cardDetails });
export const deleteCard = cardId => ({ type: DELETE_CARD, cardId });

const initialState = {
  board: {
    byId: {},
    allIds: [],
    activeId: 0,
    currentId: 0
  },
  list: {
    byId: {},
    allIds: [],
    currentId: 0
  },
  card: {
    byId: {},
    allIds: [],
    currentId: 0
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOARD:
      const runningBoardId = state.board.currentId;
      return {
        ...state,
        board: {
          byId: {
            ...state.board.byId,
            [runningBoardId]: { id: runningBoardId, text: action.boardName }
          },
          allIds: state.board.allIds.concat([runningBoardId]),
          activeId: runningBoardId,
          currentId: runningBoardId + 1
        }
      };
    case UPDATE_BOARD:
      return {
        ...state,
        board: {
          ...state.board,
          byId: {
            ...state.board.byId,
            [state.board.activeId]: {
              id: state.board.activeId,
              text: action.boardName
            }
          }
        }
      };
    case DELETE_BOARD:
      const boardById = state.board.byId;
      const boardID = action.boardId + "";
      const { [boardID]: idToBeRemoved, ...updatedBoardByIdObject } = boardById;
      console.log(typeof idToBeRemoved);
      return {
        ...state,
        board: {
          ...state.board,
          byId: updatedBoardByIdObject,
          activeId: updateId(idToBeRemoved, state.board),
          allIds: state.board.allIds.filter(id => id !== idToBeRemoved.id)
        }
      };
    case GOTO_BOARD:
      return { ...state, board: { ...state.board, activeId: action.boardId } };
    case CREATE_LIST:
      const runningListId = state.list.currentId;
      return {
        ...state,
        list: {
          byId: {
            ...state.list.byId,
            [runningListId]: {
              id: runningListId,
              boardId: state.board.activeId,
              text: action.listName
            }
          },
          allIds: state.list.allIds.concat([runningListId]),
          currentId: runningListId + 1
        }
      };
    case UPDATE_LIST:
      return {
        ...state,
        list: {
          ...state.list,
          byId: {
            ...state.list.byId,
            [action.listDetails.listId]: {
              id: action.listDetails.listId,
              boardId: state.board.activeId,
              text: action.listDetails.listName
            }
          }
        }
      };
    case DELETE_LIST:
      const listById = state.list.byId;
      const listID = action.listId + "";
      const { [listID]: tempListId, ...updatedListByIdObject } = listById;
      return {
        ...state,
        list: {
          ...state.list,
          byId: updatedListByIdObject,
          allIds: state.list.allIds.filter(id => id !== action.listId)
        }
      };
    case CREATE_CARD:
      const runningCardId = state.card.currentId;
      return {
        ...state,
        card: {
          byId: {
            ...state.card.byId,
            [runningCardId]: {
              id: runningCardId,
              listId: action.cardDetails.listId,
              text: action.cardDetails.cardName
            }
          },
          allIds: state.card.allIds.concat([runningCardId]),
          currentId: runningCardId + 1
        }
      };
    case UPDATE_CARD:
      const details = action.cardDetails;
      return {
        ...state,
        card: {
          ...state.card,
          byId: {
            ...state.card.byId,
            [details.cardId]: {
              ...state.card.byId[details.cardId],
              id: details.cardId,
              text: details.cardName
            }
          }
        }
      };
    case DELETE_CARD:
      const cardById = state.card.byId;
      const cardID = action.cardId + "";
      const { [cardID]: tempcardId, ...updatedcardByIdObject } = cardById;
      return {
        ...state,
        card: {
          ...state.card,
          byId: updatedcardByIdObject,
          allIds: state.card.allIds.filter(id => id !== action.cardId)
        }
      };
    default:
      return state;
  }
};
