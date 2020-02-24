import * as types from "../actionTypes/actionTypes";

const initialState = {
  isShowFontSetting: false,
  fontSize: 16
};

const SetFontReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SHOW_FONT_SETTING:
      return Object.assign({}, state, {
        isShowFontSetting: !state.isShowFontSetting
      });
    case types.SET_FONT_SIZE:
      return Object.assign({}, state, {
        fontSize: action.payload
      });
    default:
      return state;
  }
};

export default SetFontReducer;
