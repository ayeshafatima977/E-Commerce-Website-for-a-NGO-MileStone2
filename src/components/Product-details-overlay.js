import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AddToCart, RemoveFromCart } from "../actions/Cart";
import { FaWindowClose, FaShoppingCart } from "react-icons/fa";
import "../css/Product-overlay.css";
/*=============================================
=            Product Details Overlay Component           =
=============================================*/
const ProductDetailsOverlayComponent = (props) => {
  const GlobalStateInfo = useSelector((state) => state);
  const dispatch = useDispatch();
  const productList = GlobalStateInfo.ShopNav.products;
  let productTitleCopy,
    productDescriptionCopy,
    productPriceCopy,
    productImgCopy,
    productIdCopy,
    productInCartQtyCopy,
    productObj;

  for (const product of productList) {
    if (Number(props.productId) === product.id) {
      productTitleCopy = product.title;
      productDescriptionCopy = product.description;
      productPriceCopy = product.price;
      productImgCopy = product.image;
      productIdCopy = product.id;
      productInCartQtyCopy = product.inCartQty;
      productObj = product;
    }
  }
  const inCartCheck = () => {
    for (let item of GlobalStateInfo.Cart) {
      if (productIdCopy === item.id) {
        return true;
      }
    }
  };

  const AddSingleProductToCart = () => {
    dispatch(AddToCart(productObj));
  };
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

/*=====  End of Product Details Overlay Component ======*/

export default ProductDetailsOverlayComponent;
