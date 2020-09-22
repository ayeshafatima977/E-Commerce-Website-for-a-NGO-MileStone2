import CallFakeStoreAPI from "../Call-fake-store-api";
const ShoppingNavigationReducer = (
  state = {
    Search: "",
    Sort: "",
    Browse: "",
    Filter: "",
    products: CallFakeStoreAPI(),
    previousDisplayProducts: [],
    displayProducts: [...CallFakeStoreAPI()],
  },
  action
) => {
  // Create a copy of the state
  const stateCopy = { ...state };
  // Create a new array for only items with search term
  let displayCopy = [];

  switch (action.type) {
    case "SEARCH_PRODUCT": {
      // Update the search state
      stateCopy.Search = action.payload;
      // Create a new array for only items with search term
      let displayCopy = [];

      // Add to the array if item contains the search term
      for (const product of state.displayProducts) {
        const productTitle = product.title.toLowerCase();
        if (productTitle.includes(stateCopy.Search)) {
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
      // The two functions below are used for sorting alphabetically.
      // The Compare function code snippet was found from:
      // https://www.sitepoint.com/sort-an-array-of-objects-in-javascript/
      function compareAZ(a, b) {
        // This function will sort an array based on the title alphabetically.
        const titleA = a.title.toUpperCase();
        const titleB = b.title.toUpperCase();

        let comparison = 0;
        if (titleA > titleB) {
          comparison = 1;
        } else {
          comparison = -1;
        }
        return comparison;
      }
      function compareZA(a, b) {
        // This function will sort an array based on the title alphabetically reversed.
        const titleA = a.title.toUpperCase();
        const titleB = b.title.toUpperCase();

        let comparison = 0;
        if (titleA < titleB) {
          comparison = 1;
        } else {
          comparison = -1;
        }
        return comparison;
      }

      if (state.Sort === "") {
        stateCopy.Sort = action.payload;
        // Shorthand sort function snippet found at:
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

        // Create a copy of the product list.
        let products = [...state.displayProducts];

        // Keep a copy of the current display and save it.
        stateCopy.previousDisplayProducts = state.displayProducts;
        switch (action.payload) {
          case "PRICE_H_L": {
            products.sort((a, b) => b.price - a.price);
            stateCopy.displayProducts = products;
            break;
          }
          case "PRICE_L_H": {
            products.sort((a, b) => a.price - b.price);
            stateCopy.displayProducts = products;
            break;
          }
          case "ALPHA_A_Z": {
            products.sort(compareAZ);
            stateCopy.displayProducts = products;
            break;
          }
          case "ALPHA_Z_A": {
            products.sort(compareZA);
            stateCopy.displayProducts = products;
            break;
          }
          default: {
            return stateCopy;
          }
        }
      } else {
        // Set the sort copy to empty.
        stateCopy.Sort = "";

        // Update the copy to display the last saved view.
        displayCopy = state.previousDisplayProducts;
        stateCopy.displayProducts = displayCopy;
      }
      return stateCopy;
    }
    case "BROWSE_PRODUCT": {
      if (state.Browse === "") {
        // Change the browse state to the desired input.
        stateCopy.Browse = action.payload;

        // Keep a copy of the current display and save it.
        stateCopy.previousDisplayProducts = state.displayProducts;

        // Loop through the currently displayed products and only add the ones with the right category to the new display
        for (const product of state.displayProducts) {
          if (product.category === action.payload) {
            displayCopy.push(product);
          }
        }

        // Update the copy to show only the new display
        stateCopy.displayProducts = displayCopy;
        return stateCopy;
      } else {
        // Set the browse state to empty.
        stateCopy.Browse = "";

        // Update the copy to display the last saved view.
        displayCopy = state.previousDisplayProducts;
        stateCopy.displayProducts = displayCopy;
        return stateCopy;
      }
    }
    case "FILTER_PRODUCT": {
      let filterHigh,
        filterLow,
        displayCopy = [];

      if (state.Filter === "") {
        // Change filter state according to action.payload
        stateCopy.Filter = action.payload;
        // Keep a copy of the current display and save it.
        stateCopy.previousDisplayProducts = state.displayProducts;
        // For Price Range $0-$20
        if (action.payload === "20") {
          filterLow = 0;
          filterHigh = 20;
        }
        // For Price Range $21-$100
        else if (action.payload === "100") {
          filterLow = 21;
          filterHigh = 100;
        }
        // For Price Range $101-$200
        else if (action.payload === "200") {
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
          if (product.price > filterLow && product.price < filterHigh) {
            displayCopy.push(product);
          }
        }
        stateCopy.displayProducts = displayCopy;
      } else {
        // Display Default Products
        stateCopy.Filter = "";
        displayCopy = state.previousDisplayProducts;
        stateCopy.displayProducts = displayCopy;
      }
      return stateCopy;
    }
    default:
      return state;
  }
};

export default ShoppingNavigationReducer;
