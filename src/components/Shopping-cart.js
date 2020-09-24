/*cspell:disable*/
import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaCalendarAlt } from "react-icons/fa";
import CreditCardComponent from "./Credit-card";
import BillingDetailsComponent from "./Billing-details";
import { IncreaseCartQty, DecreaseCartQty, SetCartQty } from "../actions/Cart";
import { Link } from "react-router-dom";
import DatePickerComponent from "./Date-picker";
const ShoppingCartComponent = () => {
  const globalStateInfo = useSelector((state) => state);
  const dispatch = useDispatch();
  const inCartProducts = Array.from(
    globalStateInfo.Cart
  ); /* array of in cart products */
  let subTotal = 0;

  const ValidateYourOrderForm = () => {
    console.log("Hello World!");
    //Remove product from the subtotal and order altogether if 0 when user hit submit
    //global validation function
  };
  const creditCardRef = useRef();
  const billingInfoRef = useRef();

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          ValidateYourOrderForm();
        }}
      >
        {inCartProducts.map((inCartProduct) => {
          subTotal = subTotal + inCartProduct.price * inCartProduct.inCartQty;
          // if (inCartProduct.inCartQty > 0) {
          return (
            <div>
              <h2>{inCartProduct.title}</h2>
              <img src={inCartProduct.image} width="200px" height="200px" />
              <p>{inCartProduct.description}</p>
              <p>$ {inCartProduct.price}</p>
              <button
                onClick={() => {
                  dispatch(DecreaseCartQty(inCartProduct.id));
                }}
              >
                &#8722; {/* Minus sign */}
              </button>

              <input
                type="number"
                value={inCartProduct.inCartQty}
                min="0"
                onChange={(e) => {
                  (e.target.value > -1 || (e.target.value = "0"));
                  if (e.target.value > -1) {
                    dispatch(SetCartQty(inCartProduct.id, e.target.value));
                  }
                }}
              ></input>
              <button
                onClick={() => {
                  dispatch(IncreaseCartQty(inCartProduct.id));
                }}
              >
                &#43; {/* Plus sign */}
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
          onClick={() => {
            creditCardRef.current.runCreditCardDispatch();
            billingInfoRef.current.runBillingInfoDispatch();
          }}
        >
          Click
        </button>
      </form>
    </>
  );
};
export default ShoppingCartComponent;
