const BrowsingHistoryReducer = (
    state = [],
    action
  ) => {
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