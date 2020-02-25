import { combineReducers } from "redux";
import ShowMenuReducer from "./showMenuReducer";
import SetFontReducer from "./setFontReducer";
import SetThemeReducer from "./setThemeReducer";
import SetProgressReducer from "./setProgressReducer";
import SetNavigationReducer from "./setNavigationReducer";

const RootReducer = combineReducers({
  showMenu: ShowMenuReducer,
  setFont: SetFontReducer,
  setTheme: SetThemeReducer,
  setProgress: SetProgressReducer,
  SetNavigation: SetNavigationReducer
});

export default RootReducer;
