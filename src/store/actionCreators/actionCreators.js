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

const showProgessSetting = () => ({
  type: types.SHOW_PROGRESS
});

const showProgressCent = () => ({
  type: types.IS_LOCATIONS_AVAILABLE
});

const setProgress = progress => ({
  type: types.SET_PROGRESS,
  payload: progress
});

export {
  showMenuActionCreator,
  hideMenuActionCreator,
  showFontSetting,
  setFontSize,
  showThemeSetting,
  setTheme,
  showProgessSetting,
  showProgressCent,
  setProgress
};
