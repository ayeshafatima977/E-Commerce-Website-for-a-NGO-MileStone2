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
  const creditCardRef = useRef();
  const billingInfoRef = useRef();

  return (
    <>
      <form onSubmit={{ SubmitForm }}>
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
                onChange={(e) => {
                  dispatch(SetCartQty(inCartProduct.id, e.target.value));
                }}
                value={inCartProduct.inCartQty}
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
            SetCreditCardValidationStatus(
              creditCardRef.current.runCreditCardDispatch()
            );
            SetBillingDetailsValidationStatus(
              billingInfoRef.current.runBillingInfoDispatch()
            );

            console.log(creditCardRef.current.runCreditCardDispatch());
          }}
        >
          Click
        </button>
      </form>
    </>
  );
};
export default ShoppingCartComponent;
