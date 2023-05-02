import React from "react";
import { useSelector } from "react-redux";
import Cart from "../cart/Cart";
import ProductContainer from "./components/ProductContainer";

const Home = () => {
  const { home, cart } = useSelector((state) => state.navigate);

  return (
    <div>
      {home && <ProductContainer />}
      {cart && <Cart />}
    </div>
  );
};

export default Home;
