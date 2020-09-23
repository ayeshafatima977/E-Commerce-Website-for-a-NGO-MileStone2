import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "./Product-card";
import { InitialProductAdd } from '../actions/Shopping-navigation';
import ProductDetailsOverlayComponent from "./Product-details-overlay";

const ShoppingLayoutComponent = () => {
  const globalState = useSelector((state) => state);
  const displayProductList = globalState.ShopNav.displayProducts;
  const dispatch = useDispatch();

  // Add Loading text when API is not loaded
  // If the store is empty, call the API
  if (displayProductList.length < 1) {
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
            <Product
              title={individProd.title}
              image={individProd.image}
              price={individProd.price}
              briefDescription={individProd.briefDescription}
              obj={individProd}
              key={individProd.id}
            />
            {/* <ProductDetailsOverlayComponent productId={individProd.id} /> */}
            </>
        );
      })}
    </>
  );
};

export default ShoppingLayoutComponent;
