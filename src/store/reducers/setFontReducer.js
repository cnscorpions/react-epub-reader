import * as types from "../actionTypes/actionTypes";

const initialState = {
  isShowFontSetting: false,
  fontSize: 16
};

const SetFontReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SHOW_FONT_SETTING:
      return {
        isShowFontSetting: !state.isShowFontSetting
      };
    case types.SET_FONT_SIZE:
      return {
        fontSize: action.fontSize
      };
    default:
      return state;
  }
};

export default SetFontReducer;
