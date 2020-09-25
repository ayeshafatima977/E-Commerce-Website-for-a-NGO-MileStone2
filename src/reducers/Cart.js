const CartReducer = (state = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      briefDescription: "Your perfect pack",
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men clothing",
      inCartQty: 2,
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22.3,
      briefDescription: "Slim-fitting style",
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      category: "men clothing",
      inCartQty: 1,
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    },
    {
      id: 3,
      title: "Mens Cotton Jacket",
      price: 55.99,
      briefDescription: "great outerwear jackets",
      description:
        "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      category: "men clothing",
      inCartQty: 1,
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    }], action) => {
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
          /* item.inCartQty--; */
          cartCopy.splice(i, 1);
        }
      }
      // Once the index of the item is found, remove that item from the array
/*       cartCopy.splice(i, 1);
 */      return cartCopy;

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
      // Do not let user drop the qty below 0 in the cart
      for (let item of cartCopy) {
        if (item.id === action.payload) {
          item.inCartQty--;
          }
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
