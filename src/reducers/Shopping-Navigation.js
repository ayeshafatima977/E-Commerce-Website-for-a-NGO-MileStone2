const ShoppingNavigationReducer = (
  state = {
    Search: "",
    Sort: "",
    Browse: "",
    Filter: "",
    products: [
      {id: 0,
      title: "initial",
      category: "initial"
      }],
    displayProducts: [],
  },
  action
) => {
  // Create a copy of the state
  const stateCopy = { ...state };

  // Create a new array for only items with search term
  let displayCopy = [];
  let filterHigh = 100000;
  let filterLow = 0;

  // The two functions below are used for sorting alphabetically.
  // The Compare function code snippet was found from:
  // https://www.sitepoint.com/sort-an-array-of-objects-in-javascript/
  function compareProductAZ(productA, productB) {
    // This function will sort an array based on the title alphabetically.
    const productTitleA = productA.title.toUpperCase();
    const productTitleB = productB.title.toUpperCase();

    let comparison = 0;
    if (productTitleA > productTitleB) {
      comparison = 1;
    } else {
      comparison = -1;
    }
    return comparison;
  }
  function compareZA(productA, productB) {
    // This function will sort an array based on the title alphabetically reversed.
    const productTitleA = productA.title.toUpperCase();
    const productTitleB = productB.title.toUpperCase();

    let comparison = 0;
    if (productTitleA < productTitleB) {
      comparison = 1;
    } else {
      comparison = -1;
    }
    return comparison;
  }
  // Reducer Actions
  switch (action.type) {
    case "SEARCH_PRODUCT": {
      // Update the search state
      if (action.payload === "") {
        stateCopy.Search = '(.*)';
      }
      else {
        stateCopy.Search = action.payload.trim();
      }
      break;
    }
    case "SORT_PRODUCT": {
      if (stateCopy.Sort === "") {
        stateCopy.Sort = action.payload;
      }
      else {
        stateCopy.Sort = "";
      }
      break;
    }
    case "BROWSE_PRODUCT": {
      // Change the browse state to the desired input.
      if (stateCopy.Browse !== "" && stateCopy.Browse !== "(.*)"){
        // Wild card to match anything
        stateCopy.Browse = '(.*)';
      }
      else {
        // The browse must match the category starting with the same point.
        stateCopy.Browse = '^' + action.payload;
      }
      break;
    }
    case "FILTER_PRODUCT": {
      if (state.Filter === "") {
        // Change filter state according to action.payload
        stateCopy.Filter = action.payload;
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
      }
      else {
        stateCopy.Filter = "";
        filterHigh = 100000;
        filterLow = 0;
      }
      break;
    }
    case ("INITIAL_LIST"): {
      // Initial action to populate the store.
      stateCopy.products = action.payload;
      stateCopy.displayProducts = action.payload;
      stateCopy.Browse = '(.*)';
      stateCopy.Search = '(.*)';
      return stateCopy;
    }
    default: {
    }
  }

  // The reducer will rerun its filter on the original product list (state) everytime a tracked state is changed.
  for (const product of state.products) {
    if (product.title.match(RegExp(stateCopy.Search)) && product.category.match(RegExp(stateCopy.Browse))
       && (product.price > filterLow && product.price < filterHigh)) {
      displayCopy.push(product);
    }
  }

  switch (stateCopy.Sort) {
    case "PRICE_H_L": {
      displayCopy.sort((a, b) => a.price - b.price);
      break;
    }
    case "PRICE_L_H": {
      displayCopy.sort((a, b) => b.price - a.price);
      break;
    }
    case "ALPHA_A_Z": {
      displayCopy.sort(compareProductAZ);
      break;
    }
    case "ALPHA_Z_A": {
      displayCopy.sort(compareZA);
      break;
    }
    default: {
    }
  }
  stateCopy.displayProducts = displayCopy;
  return stateCopy;
};

export default ShoppingNavigationReducer;
