import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddToCart, RemoveFromCart } from '../actions/Cart';
import '../css/Product-card.css';

const ProductCard = (props) => {
  const globalState = useSelector(state => state);
  const dispatch = useDispatch();
  const cartState = [...globalState.Cart];

  const title = props.title;
  const imageURL = props.image;
  const briefDescription = props.briefDescription;
  const price = props.price;

  const inCartCheck = () => {
    for(let item of cartState) {
      if (title === item.title) {
        return true;
      }
    };
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
      <img className="product-image" src={imageURL} alt={briefDescription}/>
      <p className="product-brief-description">{briefDescription}</p>
      <div className="divider"></div>
      <p className="product-price">${price}</p>
      {inCartCheck(title) ? <p className="cart-option" onClick={RemoveSingleProductToCart}>Remove From Cart</p> : <p className="cart-option" onClick={AddSingleProductToCart}>Add to Cart</p>}
      <p className="product-view">Quick View</p>
    </div>
  );
};

export default ProductCard;