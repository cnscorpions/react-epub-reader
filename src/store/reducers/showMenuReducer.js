import * as types from "../actionTypes/actionTypes";

const initialState = {
  isShowMenu: false
};

const ShowMenuReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SHOW_MENU:
      return { isShowMenu: true };
    case types.HIDE_MENU:
      return { isShowMenu: false };
    default:
      return state;
  }
};

export default ShowMenuReducer;
