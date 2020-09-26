import React from "react";
import { useDispatch } from "react-redux";
import { BiSearch } from 'react-icons/bi';
import { Search, Sort, Browse, Filter } from "../actions/Shopping-navigation";
import '../css/Shopping-navigation.css'

const ShoppingNavigationComponent = () => {
  const dispatch = useDispatch();

  const SortOption = (target) => {
    const sortOptions = document.getElementsByClassName("sortOption");
    if (target.checked) {
      for (const checkbox of sortOptions) {
        if (!(target === checkbox)) {
          checkbox.disabled = true;
        }
      }
    }
    else {
      for (const checkbox of sortOptions) {
        checkbox.disabled = false;
      }
    }
    dispatch(Sort(target.id));
  };

  const BrowseOption = (target) => {
    const browseOptions = document.getElementsByClassName("browseOption");
    if (target.checked) {
      for (const checkbox of browseOptions) {
        if (!(target === checkbox)) {
          checkbox.disabled = true;
        }
      }
    }
    else {
      for (const checkbox of browseOptions) {
        checkbox.disabled = false;
      }
    }
    dispatch(Browse(target.id));
  };

  const FilterOption = (target) => {
    const filterOptions = document.getElementsByClassName("filterOption");
    if (target.checked) {
      for (const checkbox of filterOptions) {
        if (!(target === checkbox)) {
          checkbox.disabled = true;
        }
      }
    }
    else {
      for (const checkbox of filterOptions) {
        checkbox.disabled = false;
      }
    }
    dispatch(Filter(target.id));
  };

  return (
    <>
      <form id="search-form">
        <label className="screen-reader-text">Search</label>
        <input
          type="text"
          placeholder="Lookup merchandise"
          onChange={(e) => {
            dispatch(Search(e.target.value));
          }}
        />
        <span id="search-icon"><BiSearch /></span>
      </form>
      <h3>Sort</h3>
      <input
        type="checkbox"
        id="PRICE_H_L"
        className="sortOption"
        onChange={(e) => {
          SortOption(e.target);
        }}
      />
      <label htmlFor="PRICE_H_L">Price high to low</label>

      <input
        type="checkbox"
        id="PRICE_L_H"
        className="sortOption"
        onChange={(e) => {
          SortOption(e.target);
        }}
      />
      <label htmlFor="PRICE_L_H">Price low to high</label>

      <input
        type="checkbox"
        id="ALPHA_A_Z"
        className="sortOption"
        onChange={(e) => {
          SortOption(e.target);
        }}
      />
      <label htmlFor="ALPHA_A_Z">Alphabetical A-Z</label>

      <input
        type="checkbox"
        id="ALPHA_Z_A"
        className="sortOption"
        onChange={(e) => {
          SortOption(e.target);
        }}
      />
      <label htmlFor="ALPHA_Z_A">Alphabetical Z-A</label>

      <h3>Browse Categories</h3>
      <input
        type="checkbox"
        id="men clothing"
        className="browseOption"
        onChange={(e) => {
          BrowseOption(e.target);
        }}
      />
      <label htmlFor="MenC">Men Clothing</label>
      <input
        type="checkbox"
        id="jewelery"
        className="browseOption"
        onChange={(e) => {
          BrowseOption(e.target);
        }}
      />
      <label htmlFor="Jewel">Jewelery</label>
      <input
        type="checkbox"
        id="electronics"
        className="browseOption"
        onChange={(e) => {
          BrowseOption(e.target);
        }}
      />
      <label htmlFor="Elec">Electronics</label>
      <input
        type="checkbox"
        id="women clothing"
        className="browseOption"
        onChange={(e) => {
          BrowseOption(e.target);
        }}
      />
      <label htmlFor="WomenC">Women Clothing</label>

      <h3>Filter By Price</h3>
      <input
        type="checkbox"
        id="20"
        className="filterOption"
        onChange={(e) => {
          FilterOption(e.target);
        }}
      />
      <label htmlFor="0-20">$0-$20</label>
      <input
        type="checkbox"
        id="100"
        className="filterOption"
        onChange={(e) => {
          FilterOption(e.target);
        }}
      />
      <label htmlFor="21-100">$21-$100</label>
      <input
        type="checkbox"
        id="200"
        className="filterOption"
        onChange={(e) => {
          FilterOption(e.target);
        }}
      />
      <label htmlFor="101-200">$101-$200</label>
      <input
        type="checkbox"
        id="201"
        className="filterOption"
        onChange={(e) => {
          FilterOption(e.target);
        }}
      />
      <label htmlFor="201">$201+</label>
    </>
  );
};

export default ShoppingNavigationComponent;
