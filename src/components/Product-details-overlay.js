import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AddToCart, RemoveFromCart } from "../actions/Cart";

const ProductDetailsOverlayComponent = (props) => {
  const GlobalStateInfo = useSelector((state) => state);
  const dispatch = useDispatch();
  const productList = GlobalStateInfo.ShopNav.displayProducts;
  let productTitleCopy,
    productDescriptionCopy,
    productPriceCopy,
    productImgCopy,
    cartBtn,
    productIdCopy, 
    productInCartQtyCopy;

  for (const product of productList) {
    console.log(Number(props.productId) === product.id);

    if (Number(props.productId) === product.id) {
      productTitleCopy = product.title;
      productDescriptionCopy = product.description;
      productPriceCopy = product.price;
      productImgCopy = product.img;
      productIdCopy = product.id;
      productInCartQtyCopy = product.inCartQty;
    }
  }
  return (
    <>
      <h2>{productTitleCopy}</h2>
      <p>{productDescriptionCopy}</p>
      <p>{productPriceCopy}</p>
      <img src={productImgCopy} />      

      {productInCartQtyCopy === 0 ? (
        <button onClick={dispatch(AddToCart(productIdCopy))}>
          Add to Cart
        </button>
      ) : (
        <button onClick={dispatch(RemoveFromCart(productIdCopy))}>
          Remove to Cart
        </button>
      )}

    </>
  );
};
export default ProductDetailsOverlayComponent;
