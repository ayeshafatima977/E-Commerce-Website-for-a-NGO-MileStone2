/*cspell:disable*/
/* Import dependencies for the shopping cart component */
import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaCalendarAlt } from "react-icons/fa";
import CreditCardComponent from "./Credit-card";
import BillingDetailsComponent from "./Billing-details";
import {
  IncreaseCartQty,
  DecreaseCartQty,
  SetCartQty,
  RemoveFromCart,
} from "../actions/Cart";
import { Link } from "react-router-dom";
import DatePickerComponent from "./Date-picker";
/* import "../css/Shopping-cart.css";
 */
const ShoppingCartComponent = () => {
  const [CreditCardValidationStatus, SetCreditCardValidationStatus] = useState(
    false
  );
  const [
    BillingDetailsValidationStatus,
    SetBillingDetailsValidationStatus,
  ] = useState(false);
  const globalStateInfo = useSelector((state) => state);
  const dispatch = useDispatch();
  const inCartProducts = Array.from(
    globalStateInfo.Cart
  ); /* array of in cart products */
  let subTotal = 0;
  const SubmitForm = (e) => {
    e.preventDefault();
    //Display the Message only when Credit Card and Billing Details are Validated
    if (CreditCardValidationStatus && BillingDetailsValidationStatus) {
      alert("Thanks for your order, it will be shipped to you soon");
    }
  };

  /* Using useRef hook to access the creditcard and billing info components */
  const creditCardRef = useRef();
  const billingInfoRef = useRef();

  return (
    <>
      <form id="shopping-cart" onSubmit={SubmitForm}>
        {inCartProducts.map((inCartProduct) => {
          subTotal = subTotal + inCartProduct.price * inCartProduct.inCartQty;
          return (
            <div>
              <h2>{inCartProduct.title}</h2>
              <img src={inCartProduct.image} width="200px" height="200px" />
              <p>{inCartProduct.description}</p>
              <p>$ {inCartProduct.price}</p>

              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(IncreaseCartQty(inCartProduct.id));
                }}
              >
                &#43; {/* Plus sign */}
              </button>
              <input
                type="number"
                value={inCartProduct.inCartQty}
                min="0"
                onChange={(e) => {
                  e.target.value > -1 || (e.target.value = "0");
                  if (e.target.value > -1) {
                    dispatch(SetCartQty(inCartProduct.id, e.target.value));
                  }
                }}
              ></input>

              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(DecreaseCartQty(inCartProduct.id));
                }}
              >
                &#8722; {/* Minus sign */}
              </button>

              <button
                type="button"
                onClick={() => {
                  dispatch(RemoveFromCart(inCartProduct.id));
                }}
              >
                Remove From Cart
              </button>
            </div>
          );
        })}

        <Link to="/shop">Back To Shopping</Link>
        <p> Subtotal</p>
        <p> $ {subTotal.toFixed(2)} </p>
        <h2> Local Pickup </h2>
        <p>
          #180 3803 Calgary Trail NW Edmonton AB T6J 5M8 Please pick up items at
          the head office instead of in-store
        </p>
        <DatePickerComponent />
        <FaCalendarAlt />
        <p>Schedule a pickup appointment *</p>
        <p> Subtotal</p>
        <p> $ {subTotal.toFixed(2)} </p>
        <CreditCardComponent ref={creditCardRef} />
        <BillingDetailsComponent ref={billingInfoRef} />
        <button
          form="shopping-cart"
          type="submit"
          onClick={() => {
            SetCreditCardValidationStatus(
              creditCardRef.current.runCreditCardDispatch()
            );
            SetBillingDetailsValidationStatus(
              billingInfoRef.current.runBillingInfoDispatch()
            );
          }}
        >
          {/* NOTE REPLACE BUTTON AS PER FIGMA */}
          Click
        </button>
      </form>
    </>
  );
};
export default ShoppingCartComponent;
