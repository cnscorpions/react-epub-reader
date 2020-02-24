import * as types from "../actionTypes/actionTypes";

const showMenuActionCreator = () => ({
  type: types.SHOW_MENU
});

const hideMenuActionCreator = () => ({
  type: types.HIDE_MENU
});

const showFontSetting = () => ({
  type: types.SHOW_FONT_SETTING
});

const setFontSize = fontSize => ({
  type: types.SET_FONT_SIZE,
  payload: fontSize
});

const showThemeSetting = () => ({
  type: types.SHOW_THEME_SETTING
});

const setTheme = theme => ({
  type: types.SET_THEME,
  payload: theme
});

export {
  showMenuActionCreator,
  hideMenuActionCreator,
  showFontSetting,
  setFontSize,
  showThemeSetting,
  setTheme
};
