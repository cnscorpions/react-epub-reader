import { combineReducers } from "redux";
import ShowMenuReducer from "./showMenuReducer";
import SetFontReducer from "./setFontReducer";

const RootReducer = combineReducers({
  showMenu: ShowMenuReducer,
  setFont: SetFontReducer
});

export default RootReducer;
