import {
  ADD_NEW_PRODUCT,
  ADD_TO_CART,
  INCREMENT_CART_PRODUCT,
  DECREMENT_CART_PRODUCT,
  DELETE_CART_PRODUCT,
} from "./actionTypes";

export const addNewProduct = (value) => {
  return {
    type: ADD_NEW_PRODUCT,
    payload: value,
  };
};

export const addToCart = (value) => {
  return {
    type: ADD_TO_CART,
    payload: value,
  };
};

export const incrementProduct = (value) => {
  return {
    type: INCREMENT_CART_PRODUCT,
    payload: value,
  };
};

export const decrementProduct = (value) => {
  return {
    type: DECREMENT_CART_PRODUCT,
    payload: value,
  };
};

export const deleteFromCart = (value) => {
  return {
    type: DELETE_CART_PRODUCT,
    payload: value,
  };
};
