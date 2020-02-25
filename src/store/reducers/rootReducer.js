import { combineReducers } from "redux";
import ShowMenuReducer from "./showMenuReducer";
import SetFontReducer from "./setFontReducer";
import SetThemeReducer from "./setThemeReducer";
import SetProgressReducer from "./setProgressReducer";

const RootReducer = combineReducers({
  showMenu: ShowMenuReducer,
  setFont: SetFontReducer,
  setTheme: SetThemeReducer,
  setProgress: SetProgressReducer
});

export default RootReducer;
