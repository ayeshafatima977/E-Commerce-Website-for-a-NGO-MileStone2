import React from "react";
import { useDispatch } from "react-redux";
import { Search } from "../actions/Shopping-navigation";

const ShoppingNavigationComponent = () => {
  const dispatch = useDispatch();
  return (
    <>
      <form>
        <label className="screen-reader-text">Search</label>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => {
            dispatch(Search(e.target.value));
          }}
        />
      </form>
      <h3>Sort</h3>
      <input type="checkbox"/>Price high to low
      <input type="checkbox"/>Price low to high
      <input type="checkbox"/>Alphabetical A-Z
      <input type="checkbox"/>Alphabetical Z-A
      <h3>Browse Categories</h3>
      <input type="checkbox"/>Men Clothing
      <input type="checkbox"/>Jewelery
      <input type="checkbox"/>Electronics
      <input type="checkbox"/>Women Clothing
      <h3>Fitler By Price</h3>
      <input type="checkbox"/>Price high to low
      <input type="checkbox"/>Price high to low
      <input type="checkbox"/>Price high to low
    </>
  );
};

export default ShoppingNavigationComponent;
