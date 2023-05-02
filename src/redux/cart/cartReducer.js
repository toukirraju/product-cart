import {
  ADD_NEW_PRODUCT,
  ADD_TO_CART,
  INCREMENT_CART_PRODUCT,
  DECREMENT_CART_PRODUCT,
  DELETE_CART_PRODUCT,
} from "./actionTypes";

const getTotalCartQuantity = (cart) => {
  return cart.reduce((total, item) => total + item.quantity, 0);
};
const getSubTotalPrice = (cart) => {
  return cart.reduce((total, item) => total + item.totalPrice, 0);
};

const initialState = {
  products: [],
  cart: [],
  totalCartQuantity: 0,
  subTotal: 0,
};

const cartReducer = (state = initialState, action) => {
  const productId = action.payload;

  const selectedProduct = state.products.find(
    (product) => product.id === action.payload
  );

  const itemInCart = state.cart.find((item) => item.productId === productId);

  const updatedProducts = state.products.map((product) => {
    if (product.id === productId && product.quantity > 0) {
      return {
        ...product,
        quantity: product.quantity - 1,
      };
    }
    return product;
  });

  switch (action.type) {
    case ADD_NEW_PRODUCT:
      const newProduct = {
        id: Math.floor(new Date().getTime().toString()),
        productName: action.payload.productName,
        category: action.payload.category,
        imageUrl: action.payload.imageUrl,
        price: action.payload.price,
        quantity: action.payload.quantity,
      };
      return {
        ...state,
        products: [...state.products, newProduct],
      };
    case ADD_TO_CART:
      if (itemInCart) {
        // If the item is already in the cart, increment the quantity
        if (selectedProduct.quantity > 0) {
          const updatedCart = state.cart.map((item) => {
            if (item.productId === productId) {
              return {
                ...item,
                quantity: item.quantity + 1,
                totalPrice:
                  parseInt(selectedProduct.price) * parseInt(item.quantity + 1),
              };
            }
            return item;
          });
          return {
            ...state,
            products: updatedProducts,
            cart: updatedCart,
            totalCartQuantity: getTotalCartQuantity(updatedCart),
            subTotal: getSubTotalPrice(updatedCart),
          };
        } else {
          return state;
        }
      } else {
        // If the item is not in the cart, add it
        if (selectedProduct.quantity > 0) {
          const newItem = {
            productId: selectedProduct.id,
            productName: selectedProduct.productName,
            category: selectedProduct.category,
            imageUrl: selectedProduct.imageUrl,
            price: selectedProduct.price,
            quantity: 1,
            totalPrice: parseInt(selectedProduct.price) * 1,
          };
          const updatedCart = [...state.cart, newItem];
          return {
            ...state,
            products: updatedProducts,
            cart: updatedCart,
            totalCartQuantity: getTotalCartQuantity(updatedCart),
            subTotal: getSubTotalPrice(updatedCart),
          };
        } else {
          return state;
        }
      }
    case INCREMENT_CART_PRODUCT:
      if (selectedProduct.quantity > 0) {
        const updatedCart = state.cart.map((item) => {
          if (item.productId === productId) {
            return {
              ...item,
              quantity: item.quantity + 1,
              totalPrice:
                parseInt(selectedProduct.price) * parseInt(item.quantity + 1),
            };
          }
          return item;
        });
        return {
          ...state,
          products: updatedProducts,
          cart: updatedCart,
          totalCartQuantity: getTotalCartQuantity(updatedCart),
          subTotal: getSubTotalPrice(updatedCart),
        };
      } else {
        return state;
      }

    case DECREMENT_CART_PRODUCT:
      const decrementCart = state.cart.map((item) => {
        if (item.productId === productId && item.quantity > 1) {
          return {
            ...item,
            quantity: item.quantity - 1,
            totalPrice:
              parseInt(selectedProduct.price) * parseInt(item.quantity - 1),
          };
        }
        return item;
      });
      const decrementUpdateProducts = state.products.map((product) => {
        if (product.id === productId && itemInCart && itemInCart.quantity > 1) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        }
        return product;
      });
      return {
        ...state,
        products: decrementUpdateProducts,
        cart: decrementCart,
        totalCartQuantity: getTotalCartQuantity(decrementCart),
        subTotal: getSubTotalPrice(decrementCart),
      };

    case DELETE_CART_PRODUCT:
      const cartUpdated = state.cart.filter(
        (item) => item.productId !== productId
      );
      const productUpdated = state.products.map((product) => {
        if (product.id === productId && itemInCart) {
          return {
            ...product,
            quantity: product.quantity + itemInCart.quantity,
          };
        }
        return product;
      });
      return {
        ...state,
        products: productUpdated,
        cart: cartUpdated,
        totalCartQuantity: getTotalCartQuantity(cartUpdated),
        subTotal: getSubTotalPrice(cartUpdated),
      };

    default:
      return state;
  }
};

export default cartReducer;
