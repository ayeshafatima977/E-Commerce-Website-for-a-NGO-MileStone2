import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddToCart, RemoveFromCart } from '../actions/Cart';
import { FaShoppingCart } from 'react-icons/fa'

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
      <p>{inCartCheck(title) ? <button className="cart-option" onClick={RemoveSingleProductToCart}><FaShoppingCart />Remove From Cart</button> : <button className="cart-option" onClick={AddSingleProductToCart}><FaShoppingCart />Add to Cart</button>}</p>
      <p className="product-view">Quick View</p>
    </div>
  );
};

export default ProductCard;