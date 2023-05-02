import { CART, HOME } from "./actionTypes";

export const goToHome = () => {
  return {
    type: HOME,
  };
};

export const goToCart = () => {
  return {
    type: CART,
  };
};
