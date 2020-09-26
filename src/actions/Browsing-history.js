const UpdateBrowsingHistory = (browsingHistory) => {
    return {
      type: "UPDATE_BROWSING_HISTORY",
      payload: browsingHistory,
    };
  };
  
  export default UpdateBrowsingHistory;