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
  const [pickupDate, setPickupDate] = useState("");
  const globalStateInfo = useSelector((state) => state);
  const dispatch = useDispatch();
  const inCartProducts = Array.from(
    globalStateInfo.Cart
  ); /* array of in cart products */
  console.log("in cart products", inCartProducts);
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

          return (
            <div>
              <h2>{inCartProduct.title}</h2>
              <img src={inCartProduct.image} width="200px" height="200px" />
              <p>{inCartProduct.description}</p>
              <p>$ {inCartProduct.price}</p>
              <button /* onClick={dispatch(IncreaseCartQty(inCartProduct.id))} */
              >
                +
              </button>
              <input
                type="number"
                onChange={(e) => {
                  dispatch(SetCartQty(inCartProduct.id, e.targe.value));
                }}
                value={inCartProduct.inCartQty}
              ></input>
              <button /* onClick={dispatch(DecreaseCartQty(inCartProduct.id))} */
              >
                -
              </button>
            </div>
          );
        })}
        <Link to="/shop">Back To Shopping</Link>
        <p> Subtotal</p>
        <p> $ {subTotal} </p>
        <h2> Local Pickup </h2>
        <p>
          #180 3803 Calgary Trail NW Edmonton AB T6J 5M8 Please pick up items at
          the head office instead of in-store
        </p>
        <DatePickerComponent />
        <FaCalendarAlt />
        <p>Schedule a pickup appointment *</p>
        <p> Subtotal</p>
        <p> $ {subTotal} </p>
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
