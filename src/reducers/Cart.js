const CartReducer = (state = [], action) => {
  const cartCopy = [...state];
  switch (action.type) {
    case "ADD_PRODUCT_TO_CART": {
      action.payload.inCartQty++;
      cartCopy.push(action.payload);
      return cartCopy;
    }
    case "REMOVE_PRODUCT_FROM_CART": {
      // internal cart item counter
      let i = -1;
      for (let item of cartCopy) {
        // increment the internal counter
        i++;
        if (item.id === action.payload) {
          item.inCartQty--;
        }
      }
      // Once the index of the item is found, remove that item from the array
      cartCopy.splice(i,1);
      return cartCopy;
    }
    case "INCREASE_CART_QTY": {
      // Logic for adding an items quantity by 1 in the cart
      break;
    }
    case "DECREASE_CART_QTY": {
      // Logic for removing an items quantity by 1 in the cart
      break;
    }
    case "SET_CART_QTY": {
      // Logic for setting a items quantity in the cart
      break;
    }
    default:
      return state;
  }
};

export default CartReducer;
