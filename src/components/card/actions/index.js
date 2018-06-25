import { CREATE_CARD, UPDATE_CARD, DELETE_CARD } from "./actionTypes";

export const createCard = payload => ({ type: CREATE_CARD, payload });
export const updateCard = payload => ({ type: UPDATE_CARD, payload });
export const deleteCard = payload => ({ type: DELETE_CARD, payload });
