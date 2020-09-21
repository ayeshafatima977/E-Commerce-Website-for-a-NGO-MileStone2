const CartReducer = (
  state = [],
  action) => {
  switch (action.type) {
    case ("ADD_PRODUCT_TO_CART"):
    {
      // Logic for adding an item to the cart
       break;
    }
    case ("REMOVE_PRODUCT_FROM_CART"):
    {
       // Logic for removing an item completely from the cart
       break;
    }
    case ("INCREASE_CART_QTY"):
    {
       // Logic for adding an items quantity by 1 in the cart
       break;
    }
    case ("DECREASE_CART_QTY"):
    {
       // Logic for removing an items quantity by 1 in the cart
       break;
    }
    case ("SET_CART_QTY"):
    {
      // Logic for setting a items quantity in the cart
      break;
    }
    default:
       return state;
  };
};

export default CartReducer;