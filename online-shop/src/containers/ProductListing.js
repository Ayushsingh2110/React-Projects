import React, { useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { SET_PRODUCTS } from "../redux/slices/productSlice";
import ProductComponent from "./ProductComponent";

const ProductList = () => {
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(SET_PRODUCTS(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
}

export default ProductList