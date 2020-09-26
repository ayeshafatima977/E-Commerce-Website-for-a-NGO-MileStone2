import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCardComponent from "./Product-card";
import { InitialProductAdd } from "../actions/Shopping-navigation";
import "../css/Shopping-layout.css";

/* Shopping layout page where we display all products available for shopping */
const ShoppingLayoutComponent = () => {
  const globalState = useSelector((state) => state);
  const displayProductList = globalState.ShopNav.displayProducts;
  const productsList = globalState.ShopNav.products;
  const dispatch = useDispatch();

  // If the store is empty, call the API
  if (productsList[0].id === 0) {
    fetch("https://fakestoreapi.com/products?limit=20")
      .then((response) => response.json())
      .then((APIProductList) => {
        // Add the inCartQty property to each product in our store.
        for (let product of APIProductList) {
          product.inCartQty = 0;
        }
        // Update the global store.
        dispatch(InitialProductAdd(APIProductList));
      });
  }
  // Pass Product ProductId={individProd.id} into OverlayCard

  return (
    <section className="shopping-product-layout-container">
      {displayProductList.length > 0 ? (
        <div className="screen-reader-text"></div>
      ) : (
        <p>No search results found. Please ease search restrictions.</p>
      )}
      {displayProductList.map((individProd) => {
        return (
          <>
          {/* Calling product cards with all product parameters */}
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
    </section>
  );
};

export default ShoppingLayoutComponent;
