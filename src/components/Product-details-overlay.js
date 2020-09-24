import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AddToCart, RemoveFromCart } from "../actions/Cart";
import { FaWindowClose } from "react-icons/fa";
import { useLocation, Link } from "react-router-dom";
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
  let callingCard = useLocation();
  for (const product of productList) {
    if (Number(callingCard.state.productId) === product.id) {
      productTitleCopy = product.title;
      productDescriptionCopy = product.description;
      productPriceCopy = product.price;
      productImgCopy = product.image;
      productIdCopy = product.id;
      productInCartQtyCopy = product.inCartQty;
      productObj = product;
    }
  }

  const AddSingleProductToCart = () => {
    dispatch(AddToCart(productObj));
  };
  const RemoveSingleProductFromCart = () => {
    dispatch(RemoveFromCart(productIdCopy));
  };
  return (
    <section className="product-overlay">
      {/* Close ur window =>return to product shop*/}

      <div class="close">
        {/* To deactivate or remove the class from Child component we use classList Remove here */}
        <button
          onClick={() => {
            document
              .getElementsByClassName("product-overlay")[0]
              .classList.remove("overlayShow");
            console.log(document.getElementsByClassName("product-overlay"));
          }}
        >
          <FaWindowClose />
        </button>
      </div>

      <h2>{productTitleCopy}</h2>
      <p>{productDescriptionCopy}</p>
      <p>{productPriceCopy}</p>
      <img src={productImgCopy} alt={productDescriptionCopy} />

      {productInCartQtyCopy === 0 ? (
        <button onClick={AddSingleProductToCart}>Add to Cart</button>
      ) : (
        <button onClick={RemoveSingleProductFromCart}>Remove from Cart</button>
      )}
    </section>
  );
};

/*=====  End of Product Details Overlay Component ======*/

export default ProductDetailsOverlayComponent;
