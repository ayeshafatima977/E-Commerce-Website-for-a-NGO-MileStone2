const AddToCart = (productID) => {
  return {
    type: "ADD_PRODUCT_TO_CART",
    payload: productID
  };
};
const RemoveFromCart = (productID) => {
  return {
    type: "REMOVE_PRODUCT_FROM_CART",
    payload: productID
  };
};
const IncreaseCartQty = (productID) => {
  return {
    type: "INCREASE_CART_QTY",
    payload: productID
  };
};
const DecreaseCartQty = (productID) => {
  return {
    type: "DECREASE_CART_QTY",
    payload: productID
  };
};
const SetCartQty = (productID, qty) => {
  return {
    type: "SET_CART_QTY",
    payloadOne: productID,
    // PayloadTwo is the amount the user wishes to set the qty to.
    payloadTwo: qty
  };
};
export { AddToCart, RemoveFromCart, IncreaseCartQty, DecreaseCartQty, SetCartQty };