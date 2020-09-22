import CallFakeStoreAPI from "../Call-fake-store-api";
/**
 * This is the initial Page Layout Reducer
 * Author: Kenji Au
 */
const ShoppingNavigationReducer = (
  state = {
    Search: "",
    Sort: "",
    Browse: "",
    Filter: "",
    products: CallFakeStoreAPI(),
    displayProducts: [...CallFakeStoreAPI()],
  },
  action
) => {
  const stateCopy = { ...state };
  switch (action.type) {
    case "SEARCH_PRODUCT": {
      // Update the search state
      stateCopy.Search = action.payload;
      // Create a new array for only items with search term
      let displayCopy = [];

      // Add to the array if item contains the search term
      for (const product of state.displayProducts) {
        if (product.title.includes(stateCopy.Search)) {
          displayCopy.push(product);
        }
      }

      // Reset back initial product list if the search is empty
      if (stateCopy.Search === "") {
        displayCopy = state.products;
      }
      stateCopy.displayProducts = displayCopy;

      return stateCopy;
    }
    case "SORT_PRODUCT": {
      switch (action.payload) {
        case "Price high to low": {
          return state;
        }
        case "Price low to high": {
          return state;
        }
        case "Alphabetical A-Z": {
          return state;
        }
        case "Alphabetical Z-A": {
          return state;
        }
      }
      return state;
    }
    case "BROWSE_PRODUCT": {
      // Logic for Browsing categories of Products
      break;
    }
    case "FILTER_PRODUCT": {
      let filterHigh,filterLow, displayCopy = [];
      
      if (state.Filter === "") {
         // Change filter state according to action.payload
        stateCopy.Filter = action.payload;
         // Keep a copy of the current display and save it.
        stateCopy.previousDisplayProducts = state.displayProducts;
         // For Price Range $0-$20
         if(action.payload === "20" ){
            filterLow = 0;
            filterHigh = 20;
         }
         // For Price Range $21-$100
         else if(action.payload === "100" ){
            filterLow = 21;
            filterHigh = 100;
         }
         // For Price Range $101-$200
         else if(action.payload === "200" ){
            filterLow = 101;
            filterHigh = 200;
         }
         // For Price Range $200+
         else {
            filterLow = 201;
            filterHigh = 10000;
         }

         // For loop through displayProducts and check the price  in between filterLow and filterHigh
        for (const product of state.displayProducts) {
          if ((product.price > filterLow) && (product.price < filterHigh))
          {
            displayCopy.push(product);
          }
        }
        stateCopy.displayProducts = displayCopy;
        return stateCopy;
        
      } else {
         // Display Default Products
        stateCopy.Filter = "";
        displayCopy = state.previousDisplayProducts;
        stateCopy.displayProducts = displayCopy;
        return stateCopy;
      }
    }
    default:
      return state;
  }
};

export default ShoppingNavigationReducer;
