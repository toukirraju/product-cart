import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cart/action";

const ProductItem = ({ data }) => {
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(addToCart(data.id));
  };
  return (
    <div className="lws-productCard">
      <img className="lws-productImage" src={data?.imageUrl} alt="product" />
      <div className="p-4 space-y-2">
        <h4 className="lws-productName">{data?.productName}</h4>
        <p className="lws-productCategory">{data?.category}</p>
        <div className="flex items-center justify-between pb-2">
          <p className="productPrice">
            BDT <span className="lws-price">{data?.price}</span>
          </p>
          <p className="productQuantity">
            QTY <span className="lws-quantity">{data?.quantity}</span>
          </p>
        </div>
        <button
          disabled={data?.quantity === 0}
          className="lws-btnAddToCart"
          onClick={handleSubmit}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
