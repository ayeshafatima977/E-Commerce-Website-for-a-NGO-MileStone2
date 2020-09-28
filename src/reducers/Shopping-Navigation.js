/* Reducer for the states to track the shopping navigation and product list */
const ShoppingNavigationReducer = (
  state = {
    Search: "",
    Sort: "",
    Browse: "",
    Filter: [0, 100000],
    products: [{ id: 0, title: "initial", category: "initial" }],
    displayProducts: [],
  },
  action
) => {
  /* Create a copy of the state */
  const stateCopy = { ...state };

  /* Create a new array for only items with search term */
  let displayCopy = [];

  /* The two functions below are used for sorting alphabetically.
   * The Compare function code snippet was found from:
   * https://www.sitepoint.com/sort-an-array-of-objects-in-javascript/
   */
  function compareProductAZ(productA, productB) {
    /* This function will sort an array based on the title alphabetically. */
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
    /* This function will sort an array based on the title alphabetically reversed. */
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
      if (action.payload === "") {
        // Wild card RegEx to match anything
        stateCopy.Search = "(.*)";
      } else {
        stateCopy.Search = action.payload.trim();
      }
      break;
    }
    case "SORT_PRODUCT": {
      if (stateCopy.Sort === "") {
        stateCopy.Sort = action.payload;
      } else {
        stateCopy.Sort = "";
      }
      break;
    }
    case "BROWSE_PRODUCT": {
      if (stateCopy.Browse !== "" && stateCopy.Browse !== "(.*)") {
        /* Setting the search term to be a wild card RegEx to match anything */
        stateCopy.Browse = "(.*)";
      } else {
        /* The browse must match the category starting with the same character. */
        stateCopy.Browse = "^" + action.payload;
      }
      break;
    }
    case "FILTER_PRODUCT": {
      if (stateCopy.Filter[0] === 0 && stateCopy.Filter[1] === 100000) {
        switch (action.payload) {
          case "20": {
            stateCopy.Filter = [0, 20];
            break;
          }
          case "100": {
            stateCopy.Filter = [20, 100];
            break;
          }
          case "200": {
            stateCopy.Filter = [100, 200];
            break;
          }
          case "201": {
            stateCopy.Filter = [201, 100000];
            break;
          }
          default: {
            break;
          }
        }
      } else {
        stateCopy.Filter = [0, 100000];
      }
      break;
    }
    case "INITIAL_LIST": {
      /* Initial action request to populate the store. */
      stateCopy.products = action.payload;
      stateCopy.displayProducts = action.payload;
      stateCopy.Browse = "(.*)";
      stateCopy.Search = "(.*)";
      return stateCopy;
    }
    default: {
    }
  }
  // The reducer will rerun its filter on the original product list (state) everytime a tracked state is changed.
  for (const product of state.products) {
    if (
      product.title
        .toLowerCase()
        .match(RegExp(stateCopy.Search.toLowerCase())) &&
      product.category.match(RegExp(stateCopy.Browse)) &&
      product.price > stateCopy.Filter[0] &&
      product.price < stateCopy.Filter[1]
    ) {
      displayCopy.push(product);
    }
  }

  switch (stateCopy.Sort) {
    case "PRICE_H_L": {
      displayCopy.sort((productA, productB) => productB.price - productA.price);
      break;
    }
    case "PRICE_L_H": {
      displayCopy.sort((productA, productB) => productA.price - productB.price);
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
