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
import "../css/Shopping-cart.css";
import "../css/Credit-card.css";
import "../css/Billing-details.css";
import { useHistory } from "react-router-dom";
/* Shopping cart component where we display the final cart items, asking for
billing details, and credit card information before order confirmation and checkout */
const ShoppingCartComponent = () => {
  const [CreditCardValidationStatus, SetCreditCardValidationStatus] = useState(
    false
  );
  const [
    BillingDetailsValidationStatus,
    SetBillingDetailsValidationStatus,
  ] = useState(false);
  /* Copying the global state for local use */
  const globalStateInfo = useSelector((state) => state);
  const dispatch = useDispatch();
  const inCartProducts = Array.from(globalStateInfo.Cart);
  let subTotal = 0;
  const history = useHistory();
  /* Shopping card form submission routine */
  const SubmitForm = (e) => {
    e.preventDefault();
    /* Display the Message only when Credit Card and Billing Details are Validated */
    if (CreditCardValidationStatus && BillingDetailsValidationStatus) {
      for (let inCartProduct of globalStateInfo.Cart) {
        if (inCartProduct.inCartQty < 1) {
          if (
            prompt(
              "Are you sure you want to remove ",
              inCartProduct.title,
              " from your cart"
            )
          ) {
            /* If customer pressed "No" allow the customer to keep the item otherwise display prompt Thankyou for order */
            dispatch(RemoveFromCart(inCartProduct.id));
          } else {
            dispatch(SetCartQty(inCartProduct.id, "1"));
          }
        }
      }
      /* The useHistory hook gives you access to the history instance that you may use to navigate. */
      history.push("/thankyou");
    }
  };
  /* 
  Using react useRef hook to access the child component from the parent component to execute validation 
  This method was required as we import multiple form components within on parent form and all forms must
  be submitted from the parent form
  */
  const creditCardRef = useRef();
  const billingInfoRef = useRef();
  return (
    <>
      <section id="cart-container">
        <form id="shopping-cart" onSubmit={SubmitForm}>
          <h1>Your Order</h1>
          <ul>
          {inCartProducts.map((inCartProduct) => {
            subTotal = subTotal + inCartProduct.price * inCartProduct.inCartQty;
            return (
           
              <li key={inCartProduct.id}>
                <section id="cart-items">
                  <div className="container">
                    {/* <h2>Product</h2> */}
                    <h3>{inCartProduct.title}</h3>
                    <img
                      id="pdt-img"
                      src={inCartProduct.image}
                      alt="Product in shopping cart"
                    />
                    <section id="text-container">
                      <p id="description">{inCartProduct.description}</p>
                      <p id="price">$ {inCartProduct.price}</p>
                    </section>
                  </div>
                  <div id="qty-status">
                    <div id="cart-qty-style">
                      <span>
                        <button
                          className="plus"
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            dispatch(IncreaseCartQty(inCartProduct.id));
                          }}
                        >
                          &#43; {/* Plus sign */}
                        </button>
                        &nbsp;
                      </span>
                      <span id="qty">
                        <input
                          type="number"
                          value={inCartProduct.inCartQty}
                          min="0"
                          onChange={(e) => {
                            e.target.value > -1 || (e.target.value = "0");
                            if (e.target.value > -1) {
                              dispatch(
                                SetCartQty(inCartProduct.id, e.target.value)
                              );
                            }
                          }}
                        ></input>
                        &nbsp;
                      </span>
                      <span>
                        <button
                          className="minus"
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            dispatch(DecreaseCartQty(inCartProduct.id));
                          }}
                        >
                          &#8722; {/* Minus sign */}
                        </button>
                        &nbsp;{" "}
                      </span>
                    </div>
                    <span>
                      <button
                        type="button"
                        className="rmv-btn"
                        onClick={() => {
                          dispatch(RemoveFromCart(inCartProduct.id));
                        }}
                      >
                        Remove From Cart
                      </button>
                      &nbsp;
                    </span>
                  </div>
                </section>
              </li>
            );
           
          })} </ul>
          <section id="items-pickup">
            <button id="btn-back">
              <Link to="/shop">Back To Shopping</Link>
            </button>
            <div id="subtotal">
              <p> Subtotal</p>
              <p> $ {subTotal.toFixed(2)} </p>
            </div>
            <div id="pickup">
              <h2> Local Pickup </h2>
              <p id="pickup-address">
                #180 3803 Calgary Trail NW Edmonton AB T6J 5M8 Please pick up
                items at the head office instead of in-store
              </p>
              <DatePickerComponent />
              <FaCalendarAlt />
              <p id="schedule">Schedule a Pickup Appointment&nbsp;</p>
              <sup className="required-field">*</sup>
            </div>
          </section>
          <div id="cc-section">
            <h2> Credit Card</h2>
            <CreditCardComponent ref={creditCardRef} />
          </div>
          <div id="bd-section">
            <h2>Billing Details</h2>
            <BillingDetailsComponent ref={billingInfoRef} />
          </div>
          {/* 
  Using react useRef hook to access the child component from the parent component to execute validation 
  This method was required as we import multiple form components within on parent form and all forms must
  be submitted from the parent form
  */}
          <div id="shopping-required-note">
            <sup className="required-field-note">* Required Field</sup>
            <button
              id="btn-order"
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
              Place Order
            </button>
          </div>
        </form>
      </section>
    </>
  );
};
export default ShoppingCartComponent;
