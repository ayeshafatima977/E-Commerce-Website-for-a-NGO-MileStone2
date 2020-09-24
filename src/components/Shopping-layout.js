import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCardComponent from "./Product-card";
import { InitialProductAdd } from "../actions/Shopping-navigation";

const ShoppingLayoutComponent = () => {
  const globalState = useSelector((state) => state);
  const displayProductList = globalState.ShopNav.displayProducts;
  const productsList = globalState.ShopNav.products;
  const dispatch = useDispatch();

  // Add Loading text when API is not loaded
  // If the store is empty, call the API
  if (productsList[0].id === 0) {
    fetch("https://fakestoreapi.com/products?limit=20")
      .then((response) => response.json())
      .then((productList) => {
        // Add the inCartQty property to each product in our store.
        for (let product of productList) {
          product.inCartQty = 0;
        }
        // Update the global store.
        dispatch(InitialProductAdd(productList));
      });
  }
  // Pass Product ProductId={individProd.id} into OverlayCard

  return (
    <>
      {displayProductList.map((individProd) => {
        return (
          <>
            <ProductCardComponent
              title={individProd.title}
              image={individProd.image}
              price={individProd.price}
              briefDescription={individProd.briefDescription}
              obj={individProd}
              key={individProd.id}
            />
          </>
        );
      })}
    </>
  );
};

export default ShoppingLayoutComponent;
