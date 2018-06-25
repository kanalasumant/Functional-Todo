import { CREATE_LIST, UPDATE_LIST, DELETE_LIST } from "./actionTypes";

export const createList = payload => ({ type: CREATE_LIST, payload });
export const updateList = payload => ({ type: UPDATE_LIST, payload });
export const deleteList = payload => ({ type: DELETE_LIST, payload });
