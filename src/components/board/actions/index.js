import {
  CREATE_BOARD,
  UPDATE_BOARD,
  DELETE_BOARD,
  GOTO_BOARD
} from "./actionTypes";

export const createBoard = payload => ({ type: CREATE_BOARD, payload });
export const updateBoard = payload => ({
  type: UPDATE_BOARD,
  payload
});
export const deleteBoard = payload => ({ type: DELETE_BOARD, payload });
export const gotoBoard = payload => ({ type: GOTO_BOARD, payload });
