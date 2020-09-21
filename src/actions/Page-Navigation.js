const Search = (userInput) => {
  return {
    type: "SEARCH_PRODUCT",
    payload: userInput
  }
}
const Sort = (userInput) => {
  return {
    type: "SORT_PRODUCT",
    payload: userInput
  }
}
const Browse = (userInput) => {
  return {
    type: "BROWSE_PRODUCT",
    payload: userInput
  }
}
const Filter = (userInput) => {
  return {
    type: "FILTER_PRODUCT",
    payload: userInput
  }
}

export {Search, Sort, Browse, Filter} ;