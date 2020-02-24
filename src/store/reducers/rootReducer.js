import { combineReducers } from "redux";
import ShowMenuReducer from "./showMenuReducer";
import SetFontReducer from "./setFontReducer";
import SetThemeReducer from "./setThemeReducer";

const RootReducer = combineReducers({
  showMenu: ShowMenuReducer,
  setFont: SetFontReducer,
  setTheme: SetThemeReducer
});

export default RootReducer;
