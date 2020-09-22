import React from "react";
import { useDispatch } from "react-redux";
import { Search, Sort} from "../actions/Shopping-navigation";


const ShoppingNavigationComponent = () => {
  const dispatch = useDispatch();

  const SortOption = () => {
    console.log(this);
    if (this.checked) {
      console.log("hi");
    };
  };

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
      <input type="checkbox" id="PriceHL" onChange={(e) => {SortOption(e)}}/>
      <label htmlFor="PriceHL">Price high to low</label>
      <input type="checkbox" id="PriceLH"/>
      <label htmlFor="PriceLH">Price low to high</label>
      <input type="checkbox" id="AlphaA"/>
      <label htmlFor="AlphaA">Alphabetical A-Z</label>
      <input type="checkbox" id="AlphaZ"/>
      <label htmlFor="AlphaZ">Alphabetical Z-A</label>

      <h3>Browse Categories</h3>
      <input type="checkbox" id="MenC"/>
      <label htmlFor="MenC">Men Clothing</label>
      <input type="checkbox" id="Jewel"/>
      <label htmlFor="Jewel">Jewelery</label>
      <input type="checkbox" id="Elec"/>
      <label htmlFor="Elec">Electronics</label>
      <input type="checkbox" id="WomenC"/>
      <label htmlFor="WomenC">Women Clothing</label>
      
      <h3>Fitler By Price</h3>
      <input type="checkbox" id="0-20"/>
      <label htmlFor="0-20">$0-$20</label>
      <input type="checkbox" id="21-100"/>
      <label htmlFor="21-100">$21-$100</label>
      <input type="checkbox" id="101-200"/>
      <label htmlFor="101-200">$101-$200</label>
      <input type="checkbox" id="201"/>
      <label htmlFor="201">$201+</label>
    </>
  );
};

export default ShoppingNavigationComponent;
