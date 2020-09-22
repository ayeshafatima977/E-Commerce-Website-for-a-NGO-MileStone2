/*cspell:disable*/
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import CreditCardComponent from 'Credit-card'
import BillingDetailsComponent from 'Billing-details'

function ShoppingCartComponent() {
    [pickupDate, setPickupDate] = useState('');
  const globalStateInfo = useSelector((state) => state);
  const dispatch = useDispatch();
  const inCartProducts = [
    ...GlobalStateInfo.Cart,
  ]; /* array of in cart products */
  let subTotal = 0;

  const ValidateYourOrderForm = ()=>{};

  return (
    <>
      <form onSubmit={ValidateYourOrderForm()}>
        {/* ======== */}
        {inCartProducts.map((inCartProduct) => {
          <div>
            <h2>{inCartProduct.title}</h2>
            <img href={inCartProduct.image} />
            <p>{inCartProduct.description}</p>
            <p>{inCartProduct.price}</p>
            <button onClick={dispatch(IncreaseCartQty(inCartProduct.id))}>
              +
            </button>
            <input
              type="text"
              onChange={(e) => {
                dispatch(SetCartQty(inCartProduct.id, e.targe.value));
              }}
            >
              {inCartProduct.inCartQty}
            </input>
            <button onClick={dispatch(DecreaseCartQty(inCartProduct.id))}>
              -
            </button>
          </div>;
          {
            subTotal = subTotal + inCartProduct.price;
          }
        })}
        {/* =========== */}

    <button>Back To Shopping</button>
    <p> Subtotal</p>
    <p> {subTotal} </p>
    <h2> Local Pickup </h2>
    <p>#180 3803 Calgary Trail NW Edmonton AB T6J 5M8
    Please pick up items at the head office instead of in-store</p>
    <input type = 'text' onChange = {(e)=>setPickuptDate(e.target.value)}>{pickupDate}</input>
    <button onClick = {setPickupDate ()}><FontAwesomeIcon icon="faCalendar"/></button>
    <p>Schedule a pickup appointment *
    </p>
    <p> Subtotal</p>
    <p> {subTotal} </p>
    <CreditCardComponent />
    <h3>Billing Details</h3>
    <input type='submit'> Place Or der </input>
    <BillingDetailsComponent />
    </form>
    </>
  );
}
export default ShoppingCartComponent;