import React from "react";
import { useSelector } from "react-redux";
import AddProduct from "../../../components/AddProduct";
import ProductItem from "../../../components/ProductItem";

const ProductContainer = () => {
  const { products, cart } = useSelector((state) => state.cart);
  return (
    <div className="productWrapper">
      {/* <!-- products container --> */}
      <div className="productContainer" id="lws-productContainer">
        {/* <!-- product item --> */}

        {products.length !== 0 ? (
          products?.map((product) => (
            <div key={product.id}>
              <ProductItem data={product} />
            </div>
          ))
        ) : (
          <h2>Product not found!</h2>
        )}

        {/* <!-- product item ends --> */}
      </div>
      {/* <!-- products container ends --> */}
      <div>
        {/* <!-- Product Input Form --> */}
        <AddProduct />
        {/* <!-- Product Input Form Ends --> */}
      </div>
    </div>
  );
};

export default ProductContainer;
