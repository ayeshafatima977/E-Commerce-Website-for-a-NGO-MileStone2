/* Global state reducer to store the site browsing history details for 
local use within other components or future backend DB SECURITY applications */

const BrowsingHistoryReducer = (state = [], action) => {
  switch (action.type) {
    case "UPDATE_BROWSING_HISTORY":
      let stateCopy = [...state];
      stateCopy.push(action.payload);
      return stateCopy;

    default:
      return state;
  }
};
export default BrowsingHistoryReducer;
