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
      cartCopy.splice(i, 1);
      return cartCopy;
    }
    case "INCREASE_CART_QTY": {
      for (let item of cartCopy) {
        if (item.id === action.payload) {
          item.inCartQty++;
        }
      }
      return cartCopy;
    }
    case "DECREASE_CART_QTY": {
      let i = -1;
      let noItem = false;
      for (let item of cartCopy) {
        // increment the internal counter
        i++;
        if (item.id === action.payload) {
          item.inCartQty--;
          if (item.inCartQty === 0) {
            noItem = true;
          }
        }
      }
      if (noItem) {
        cartCopy.splice(i, 1);
      }
      return cartCopy;
    }
    case "SET_CART_QTY": {
      for (let item of cartCopy) {
        if (item.id === action.payloadOne) {
          item.inCartQty = action.payloadTwo;
        }
      }
      return cartCopy;
    }
    default:
      return state;
  }
};

export default CartReducer;
