import { combineReducers } from "redux";
import cartReducer from "./cart/cartReducer";
import navigationReducer from "./navigation/navigationReducer";
const rootReducer = combineReducers({
  navigate: navigationReducer,
  cart: cartReducer,
});

export default rootReducer;
