import { HOME, CART } from "./actionTypes";
const initialState = {
  home: true,
  cart: false,
};

const navigationReducer = (state = initialState, action) => {
  switch (action.type) {
    case HOME:
      return {
        ...state,
        home: true,
        cart: false,
      };

    case CART:
      return {
        ...state,
        home: false,
        cart: true,
      };

    default:
      return state;
  }
};

export default navigationReducer;
