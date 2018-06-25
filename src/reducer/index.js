import { combineReducers } from "redux";
import boardsReducer from "../components/board/board-reducer";
import listReducer from "../components/list/list-reducer";
import cardReducer from "../components/card/card-reducer";

export default combineReducers({
  board: boardsReducer,
  list: listReducer,
  card: cardReducer
});
