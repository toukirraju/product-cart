import React from "react";
import { useDispatch } from "react-redux";
import {
  decrementProduct,
  deleteFromCart,
  incrementProduct,
} from "../../../redux/cart/action";

const CartItem = ({ data }) => {
  const dispatch = useDispatch();
  const handleIncrement = (id) => {
    dispatch(incrementProduct(id));
  };
  const handleDecrement = (id) => {
    dispatch(decrementProduct(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteFromCart(id));
  };
  return (
    <div className="cartCard">
      <div className="flex items-center col-span-6 space-x-6">
        {/* <!-- cart image --> */}
        <img className="lws-cartImage" src={data?.imageUrl} alt="product" />
        {/* <!-- cart item info --> */}
        <div className="space-y-2">
          <h4 className="lws-cartName">{data?.productName}</h4>
          <p className="lws-cartCategory">{data?.category}</p>
          <p>
            BDT <span className="lws-cartPrice">{data?.price}</span>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
        {/* <!-- amount buttons --> */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => handleIncrement(data.productId)}
            className="lws-incrementQuantity"
          >
            <i className="text-lg fa-solid fa-plus"></i>
          </button>
          <span className="lws-cartQuantity">{data?.quantity}</span>
          <button
            onClick={() => handleDecrement(data.productId)}
            className="lws-decrementQuantity"
            disabled={data?.quantity === 1}
          >
            <i className="text-lg fa-solid fa-minus"></i>
          </button>
        </div>
        {/* <!-- price --> */}
        <p className="text-lg font-bold">
          BDT <span className="lws-calculatedPrice">{data?.totalPrice}</span>
        </p>
      </div>
      {/* <!-- delete button --> */}
      <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
        <button
          className="lws-removeFromCart"
          onClick={() => handleDelete(data.productId)}
        >
          <i className="text-lg text-red-400 fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
