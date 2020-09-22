import React from "react";
import { useDispatch } from "react-redux";
import { Search, Sort, Browse, Filter } from "../actions/Shopping-navigation";
import { BiSearch } from 'react-icons/Bi';



const ShoppingNavigationComponent = () => {
  const dispatch = useDispatch();

  const SortOption = (id) => {
    dispatch(Sort(id))
  };

  const BrowseOption = (id) => {
    dispatch(Browse(id));
  };
     
    
    const FilterOption = (id) => {
      dispatch(Filter(id));
  }

  return (
    <>
      <form>
        <label className="screen-reader-text">Search<BiSearch /></label>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => {
            dispatch(Search(e.target.value));
          }}
        />
      </form>
      <h3>Sort</h3>
      <input type="checkbox" id="PRICE_H_L" onChange={(e) => {SortOption(e.target.id)}}/>
      <label htmlFor="PriceHL">Price high to low</label>
      <input type="checkbox" id="PRICE_L_H"  onChange={(e) => {SortOption(e.target.id)}}/>
      <label htmlFor="PriceLH">Price low to high</label>
      <input type="checkbox" id="ALPHA_A_Z" onChange={(e) => {SortOption(e.target.id)}}/>
      <label htmlFor="AlphaA">Alphabetical A-Z</label>
      <input type="checkbox" id="ALPHA_Z_A" onChange={(e) => {SortOption(e.target.id)}}/>
      <label htmlFor="AlphaZ">Alphabetical Z-A</label>

      <h3>Browse Categories</h3>
      <input type="checkbox" id="men clothing" onChange={(e) => {BrowseOption(e.target.id)}}/>
      <label htmlFor="MenC">Men Clothing</label>
      <input type="checkbox" id="jewelery" onChange={(e) => {BrowseOption(e.target.id)}}/>
      <label htmlFor="Jewel">Jewelery</label>
      <input type="checkbox" id="electronics" onChange={(e) => {BrowseOption(e.target.id)}}/>
      <label htmlFor="Elec">Electronics</label>
      <input type="checkbox" id="women clothing" onChange={(e) => {BrowseOption(e.target.id)}}/>
      <label htmlFor="WomenC">Women Clothing</label>
      
      <h3>Filter By Price</h3>
      <input type="checkbox" id="20" onChange={(e) => {FilterOption(e.target.id)}}/>
      <label htmlFor="0-20">$0-$20</label>
      <input type="checkbox" id="100" onChange={(e) => {FilterOption(e.target.id)}}/>
      <label htmlFor="21-100">$21-$100</label>
      <input type="checkbox" id="200" onChange={(e) => {FilterOption(e.target.id)}}/>
      <label htmlFor="101-200">$101-$200</label>
      <input type="checkbox" id="201" onChange={(e) => {FilterOption(e.target.id)}}/>
      <label htmlFor="201" >$201+</label>
    </>
  );
};

export default ShoppingNavigationComponent;
