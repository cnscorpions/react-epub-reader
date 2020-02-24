import * as types from "../actionTypes/actionTypes";

const initialState = {
  isShowThemeSetting: false,
  theme: "default"
};

const SetThemeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SHOW_THEME_SETTING:
      return Object.assign({}, state, {
        isShowThemeSetting: !state.isShowThemeSetting
      });
    case types.SET_THEME:
      return Object.assign({}, state, {
        theme: action.payload
      });
    default:
      return state;
  }
};

export default SetThemeReducer;
