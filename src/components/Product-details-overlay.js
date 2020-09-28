import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AddToCart, RemoveFromCart } from "../actions/Cart";
import { FaWindowClose, FaShoppingCart } from "react-icons/fa";
import "../css/Product-overlay.css";

/* 
Product overlay component where we show more details about the items in the shopping page 
this is displayed in a overlay fashion 
*/

const ProductDetailsOverlayComponent = (props) => {
  /* Copying the global state for local use */
  const GlobalStateInfo = useSelector((state) => state);
  const dispatch = useDispatch();
  const productList = GlobalStateInfo.ShopNav.products;
  let productTitleCopy,
    productDescriptionCopy,
    productPriceCopy,
    productImgCopy,
    productIdCopy,
    productObj;

  /* 
    Looking up which product card called for the overlay 
    to display the right product info on the overlay card
     */
  for (const product of productList) {
    if (Number(props.productId) === product.id) {
      productTitleCopy = product.title;
      productDescriptionCopy = product.description;
      productPriceCopy = product.price;
      productImgCopy = product.image;
      productIdCopy = product.id;
      productObj = product;
    }
  }
  /* 
  This function meant for toggling the add to cart & 
  remove from cart button for better user experience 
  */
  const inCartCheck = () => {
    for (let item of GlobalStateInfo.Cart) {
      if (productIdCopy === item.id) {
        return true;
      }
    }
  };
  /* 
  This function meant for toggling the add to cart & 
  remove from cart button for better user experience (dispatch add action)
  */
  const AddSingleProductToCart = () => {
    dispatch(AddToCart(productObj));
  };
  /* 
  This function meant for toggling the add to cart & 
  remove from cart button for better user experience (dispatch remove action)
  */
  const RemoveSingleProductFromCart = () => {
    dispatch(RemoveFromCart(productIdCopy));
  };
  return (
    <section className="product-overlay-section">
      <div id="overlay-rightside">
        <div id="h2-close">
          <h2>{productTitleCopy}</h2>
          <button
            className="close-button"
            onClick={() => {
              document
                .getElementsByClassName("product-details-overlay")[0]
                .classList.remove("overlayShow");
            }}
          >
            <FaWindowClose className="close-button" />
          </button>
        </div>
        <div id="img-desc">
          <img src={productImgCopy} alt={productDescriptionCopy} />
          <p id="prod-desc">{productDescriptionCopy}</p>
        </div>

        <div id="cartbtn-price">
          <p id="price-tag">
            <span>$</span>
            {productPriceCopy}
          </p>
          {inCartCheck() ? (
            <button
              type="button"
              className="shpingbtn"
              onClick={RemoveSingleProductFromCart}
            >
              <span className="shopping-cart">
                Remove From Cart&nbsp;
                <FaShoppingCart />
              </span>
            </button>
          ) : (
            <button
              type="button"
              className="shpingbtn"
              onClick={AddSingleProductToCart}
            >
              <span className="shopping-cart">
                Add to Cart&nbsp;
                <FaShoppingCart />
              </span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsOverlayComponent;
