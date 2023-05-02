import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewProduct } from "../redux/cart/action";

const AddProduct = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    productName: "",
    category: "",
    imageUrl: "",
    price: 0,
    quantity: 0,
  });

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setState((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewProduct(state));
    setState({
      productName: "",
      category: "",
      imageUrl: "",
      price: 0,
      quantity: 0,
    });
  };
  return (
    <div className="formContainer">
      <h4 className="formTitle">Add New Product</h4>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 text-[#534F4F]"
        id="lws-addProductForm"
      >
        {/* <!-- product name --> */}
        <div className="space-y-2">
          <label htmlFor="lws-inputName">Product Name</label>
          <input
            className="addProductInput"
            id="lws-inputName"
            type="text"
            name="productName"
            value={state.productName}
            onChange={changeHandler}
            required
          />
        </div>
        {/* <!-- product category --> */}
        <div className="space-y-2">
          <label htmlFor="lws-inputCategory">Category</label>
          <input
            className="addProductInput"
            id="lws-inputCategory"
            type="text"
            name="category"
            value={state.category}
            onChange={changeHandler}
            required
          />
        </div>
        {/* <!-- product image url --> */}
        <div className="space-y-2">
          <label htmlFor="lws-inputImage">Image Url</label>
          <input
            className="addProductInput"
            id="lws-inputImage"
            type="text"
            name="imageUrl"
            value={state.imageUrl}
            onChange={changeHandler}
            required
          />
        </div>
        {/* <!-- price & quantity container --> */}
        <div className="grid grid-cols-2 gap-8 pb-4">
          {/* <!-- price --> */}
          <div className="space-y-2">
            <label htmlFor="ws-inputPrice">Price</label>
            <input
              className="addProductInput"
              type="number"
              id="lws-inputPrice"
              name="price"
              value={state.price}
              onChange={changeHandler}
              required
            />
          </div>
          {/* <!-- quantity --> */}
          <div className="space-y-2">
            <label htmlFor="lws-inputQuantity">Quantity</label>
            <input
              className="addProductInput"
              type="number"
              id="lws-inputQuantity"
              name="quantity"
              value={state.quantity}
              onChange={changeHandler}
              required
            />
          </div>
        </div>
        {/* <!-- submit button --> */}
        <button type="submit" id="lws-inputSubmit" className="submit">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
