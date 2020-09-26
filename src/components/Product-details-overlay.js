import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AddToCart, RemoveFromCart } from "../actions/Cart";
import { FaWindowClose, FaShoppingCart } from "react-icons/fa";

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

  console.log(GlobalStateInfo.ShopNav.products);
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

  const AddSingleProductToCart = () => {
    dispatch(AddToCart(productObj));
  };
  const RemoveSingleProductFromCart = () => {
    dispatch(RemoveFromCart(productIdCopy));
  };
  return (
    <section className="product-overlay-section">
      <button
        onClick={() => {
          document
            .getElementsByClassName("product-details-overlay")[0]
            .classList.remove("overlayShow");
        }}
      >
        <FaWindowClose />
      </button>
      <h2>{productTitleCopy}</h2>
      <p>{productDescriptionCopy}</p>
      <p>{productPriceCopy}</p>
      <img src={productImgCopy} alt={productDescriptionCopy} />

      {productInCartQtyCopy === 0 ? (
        <button onClick={AddSingleProductToCart}><span className="shopping-cart">
        <FaShoppingCart />
        &nbsp;Add to Cart
      </span></button>
      ) : (
        <button onClick={RemoveSingleProductFromCart}><span className="shopping-cart">
        <FaShoppingCart />
        &nbsp;Remove from Cart
      </span></button>
      )}
    </section>
  );
};

/*=====  End of Product Details Overlay Component ======*/

export default ProductDetailsOverlayComponent;
