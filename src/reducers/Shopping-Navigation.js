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
   switch (action.type) {
     case ("SEARCH_PRODUCT"):
     {
        // Logic for Searching for Product
        break;
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