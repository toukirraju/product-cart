import React from "react";
import { useSelector } from "react-redux";
import BillDetails from "./components/BillDetails";
import CartItem from "./components/CartItem";

const Cart = () => {
  const { products, cart } = useSelector((state) => state.cart);
  return (
    <div class="container 2xl:px-8 px-2 mx-auto">
      <h2 class="mb-8 text-xl font-bold">Shopping Cart</h2>
      <div class="cartListContainer">
        <div class="space-y-6">
          {/* <!-- Cart Item --> */}
          {cart.length !== 0 ? (
            cart?.map((item) => (
              <div key={item.productId}>
                <CartItem data={item} />
              </div>
            ))
          ) : (
            <h3>Your cart is empty!</h3>
          )}

          {/* <!-- Cart Items Ends --> */}
        </div>

        {/* <!-- Bill Details --> */}
        <div>
          <BillDetails />
        </div>
      </div>
    </div>
  );
};

export default Cart;
