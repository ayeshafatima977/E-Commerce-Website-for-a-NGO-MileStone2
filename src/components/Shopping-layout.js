import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCardComponent from "./Product-card";
import "../css/Shopping-layout.css";
import { InitialProductAdd } from "../actions/Shopping-navigation";

/* Shopping layout component on the shopping page where we display all products available for shopping */
const ShoppingLayoutComponent = () => {
  const globalState = useSelector((state) => state);
  const displayProductList = globalState.ShopNav.displayProducts;
  const productsList = globalState.ShopNav.products;
  const dispatch = useDispatch();

  /* If the store is initialized (expecting a product with ID = 0) then call the API */
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

  return (
    <section className="shopping-product-layout-container">
      {displayProductList.length < 1 && productsList[0].id !== 0 ? (
        <p>No search results found. Please ease search restrictions.</p>
      ) : (
        <div className="screen-reader-text"></div>
      )}
      {productsList[0].title === "initial" ? (
        <p id="shopping-load-message">Loading...</p>
      ) : (
        <div className="screen-reader-text"></div>
      )}
      <ul>
        {displayProductList.map((individProd) => {
          return (
            <li className="individ-product-card" key={individProd.id}>
              {/* Calling product cards with all product parameters */}
              <ProductCardComponent
                title={individProd.title}
                image={individProd.image}
                price={individProd.price}
                briefDescription={individProd.briefDescription}
                obj={individProd}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ShoppingLayoutComponent;
