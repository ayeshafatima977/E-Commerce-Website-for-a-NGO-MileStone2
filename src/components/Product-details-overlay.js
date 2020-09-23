import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AddToCart, RemoveFromCart } from "../actions/Cart";
import { FaWindowClose } from "react-icons/fa";



/*=============================================
=            Product Details Overlay Component           =
=============================================*/

const ProductDetailsOverlayComponent = (props) => {
  const GlobalStateInfo = useSelector((state) => state);
  const dispatch = useDispatch();
  const productList = GlobalStateInfo.ShopNav.displayProducts;
  let productTitleCopy,
      productDescriptionCopy,
      productPriceCopy,
      productImgCopy,    
      productIdCopy, 
      productInCartQtyCopy;

  for (const product of productList) {
    
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
    <section>
      <button><FaWindowClose /></button>
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
    </section>
  );
};

/*=====  End of Product Details Overlay Component ======*/



export default ProductDetailsOverlayComponent;
