import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart, RemoveFromCart } from "../actions/Cart";
import { FaShoppingCart } from "react-icons/fa";
import ProductDetailsOverlayComponent from "./Product-details-overlay";
import { Link } from "react-router-dom";

import "../css/Product-card.css";

const ProductCard = (props) => {
  const globalState = useSelector((state) => state);
  const dispatch = useDispatch();
  const cartState = [...globalState.Cart];

  const title = props.title;
  const imageURL = props.image;
  const briefDescription = props.briefDescription;
  const price = props.price;
  const id = props.obj.id;

  const inCartCheck = () => {
    for (let item of cartState) {
      if (title === item.title) {
        return true;
      }
    }
  };

  const AddSingleProductToCart = () => {
    dispatch(AddToCart(props.obj));
  };
  const RemoveSingleProductToCart = () => {
    dispatch(RemoveFromCart(props.obj));
  };

  return (
    <div className="product-card-container">
      <h2 className="product-title">{title}</h2>
      <img className="product-image" src={imageURL} alt={briefDescription} />
      <p className="product-brief-description">{briefDescription}</p>
      <div className="divider"></div>
      <p className="product-price">${price}</p>
      <FaShoppingCart />
      {inCartCheck(title) ? (
        <button className="cart-option" onClick={RemoveSingleProductToCart}>
          Remove From Cart
        </button>
      ) : (
        <button className="cart-option" onClick={AddSingleProductToCart}>
          Add to Cart
        </button>
      )}

      {/* Add/Remove */}
      <Link
        to={{
          pathname: "/product-quick-view",
          state: { productId: props.obj.id },
        }}
      >
        Quick View
      </Link>
    </div>
  );
};

export default ProductCard;
