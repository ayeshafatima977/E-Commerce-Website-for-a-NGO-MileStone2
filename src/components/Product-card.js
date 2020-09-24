import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart, RemoveFromCart } from "../actions/Cart";
import { FaShoppingCart, FaEye } from "react-icons/fa";
import ProductDetailsOverlayComponent from "./Product-details-overlay";
import "../css/Product-card.css";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import GlobalStore from "./store";

const ProductCardComponent = (props) => {
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

      <button
        onClick={() => {
          ReactDOM.render(
            <>
              <Provider store={GlobalStore}>
                <ProductDetailsOverlayComponent productId={props.obj.id} />
              </Provider>
            </>,
            document.getElementById("product-details-overlay-div")
          );
          document
            .getElementsByClassName("product-details-overlay")[0]
            .classList.add("overlayShow");
        }}
      >
        QuickView trail <FaEye />
      </button>
    </div>
  );
};

export default ProductCardComponent;
