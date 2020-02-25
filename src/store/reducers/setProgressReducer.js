import * as types from "../actionTypes/actionTypes";

const initialState = {
  isShowProgress: false,
  isLocationsAvailable: false,
  progress: 0
};

const SetProgressReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.IS_LOCATIONS_AVAILABLE:
      const newState = JSON.parse(JSON.stringify(state));
      newState["isLocationsAvailable"] = !newState["isLocationsAvailable"];
      return newState;
    case types.SET_PROGRESS:
      return Object.assign({}, state, {
        progress: action.payload
      });
    case types.SHOW_PROGRESS:
      return Object.assign({}, state, {
        isShowProgress: !state.isShowProgress
      });
    default:
      return state;
  }
};

export default SetProgressReducer;
