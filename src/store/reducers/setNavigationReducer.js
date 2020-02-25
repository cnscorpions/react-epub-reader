import * as types from "../actionTypes/actionTypes";

const initialState = {
  catalog: [],
  href: null
};

const SetNavigationReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CATALOG:
      return Object.assign({}, state, {
        catalog: [...state.catalog, action.payload]
      });
    case types.NAVIGATE_TO:
      return Object.assign({}, state, {
        href: action.payload
      });
    default:
      return state;
  }
};

export default SetNavigationReducer;
