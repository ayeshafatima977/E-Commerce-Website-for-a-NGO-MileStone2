import CallFakeStoreAPI from '../Call-fake-store-api';
/**
 * This is the initial Page Layout Reducer
 * Author: Kenji Au
 */
 const ShoppingNavigationReducer = (
   state = {
    Search: "",
    Sort: "",
    Browse: "",
    products: CallFakeStoreAPI(),
    displayProducts: [...CallFakeStoreAPI()]
    
  },
  action) => {
   const stateCopy = {...state};
   switch (action.type) {
     case ("SEARCH_PRODUCT"):
     {
        // Update the search state
        stateCopy.Search = action.payload;
        // Create a new array for only items with search term
        let displayCopy = [];

        // Add to the array if item contains the search term
        for(const product of state.displayProducts) {
           if(product.title.includes(stateCopy.Search)) {
              displayCopy.push(product);
           }
        };

        // Reset back initial product list if the search is empty
        if (stateCopy.Search === "") {
           displayCopy = state.products;
        }
        stateCopy.displayProducts = displayCopy;
        
        return stateCopy;
     }
     case ("SORT_PRODUCT"):
     {
        // Logic for Sorting Products
        break;
     }
     case ("BROWSE_PRODUCT"):
     {
        // Logic for Browsing categories of Products
        break;
     }
     case ("FILTER_PRODUCT"):
     {
        // Logic for Filtering Products
        break;
     }
     default:
        return state;
   };
 };

 export default ShoppingNavigationReducer;