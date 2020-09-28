import React from "react";
import { useDispatch } from "react-redux";
import { BiSearch } from "react-icons/bi";
import { Search, Sort, Browse, Filter } from "../actions/Shopping-navigation";
import "../css/Shopping-navigation.css";

/* Shopping navigation side menu where the visitor can filter/search to the 
desired products. It has search box, filters by category and price and does sorting as well*/
const ShoppingNavigationComponent = () => {
  const dispatch = useDispatch();

  /* Function that will disable checkboxes once one is clicked. Limits the user to have one
  /* sorting option at a time.
   */
  const SortOption = (target) => {
    const sortOptions = document.getElementsByClassName("sort-option");
    if (target.checked) {
      for (const checkbox of sortOptions) {
        if (!(target === checkbox)) {
          checkbox.disabled = true;
        }
      }
    } else {
      for (const checkbox of sortOptions) {
        checkbox.disabled = false;
      }
    }
    dispatch(Sort(target.id));
  };

  /* Function that will disable checkboxes once one is clicked. Limits the user to have one
  /* browse option at a time.
   */
  const BrowseOption = (target) => {
    const browseOptions = document.getElementsByClassName("browse-option");
    if (target.checked) {
      for (const checkbox of browseOptions) {
        if (!(target === checkbox)) {
          checkbox.disabled = true;
        }
      }
    } else {
      for (const checkbox of browseOptions) {
        checkbox.disabled = false;
      }
    }
    dispatch(Browse(target.id)); /* checkbox input id */
  };

  /* Function that will disable checkboxes once one is clicked. Limits the user to have one
  /* filter option at a time.
   */
  const FilterOption = (target) => {
    const filterOptions = document.getElementsByClassName("filter-option");
    if (target.checked) {
      for (const checkbox of filterOptions) {
        if (!(target === checkbox)) {
          checkbox.disabled = true;
        }
      }
    } else {
      for (const checkbox of filterOptions) {
        checkbox.disabled = false;
      }
    }
    dispatch(Filter(target.id));
  };

  return (
    <article className="shopping-navigation-component">
      <form id="search-form">
        <label htmlFor="search-input" className="screen-reader-text">
          Search
        </label>
        <input
          id="search-input"
          type="text"
          placeholder="Search"
          onChange={(e) => {
            dispatch(Search(e.target.value));
          }}
        />
        <span id="search-icon">
          <BiSearch />
        </span>
      </form>
      <section id="sort-options" className="shopping-nav-container">
        <h3>Sort By</h3>
        <input
          type="checkbox"
          id="PRICE_H_L"
          className="sort-option"
          onChange={(e) => {
            SortOption(e.target);
          }}
        />
        <label htmlFor="PRICE_H_L">Price High to Low</label>

        <input
          type="checkbox"
          id="PRICE_L_H"
          className="sort-option"
          onChange={(e) => {
            SortOption(e.target);
          }}
        />
        <label htmlFor="PRICE_L_H">Price Low to High</label>

        <input
          type="checkbox"
          id="ALPHA_A_Z"
          className="sort-option"
          onChange={(e) => {
            SortOption(e.target);
          }}
        />
        <label htmlFor="ALPHA_A_Z">Alphabetical A-Z</label>

        <input
          type="checkbox"
          id="ALPHA_Z_A"
          className="sort-option"
          onChange={(e) => {
            SortOption(e.target);
          }}
        />
        <label htmlFor="ALPHA_Z_A">Alphabetical Z-A</label>
      </section>
      <section id="category-options" className="shopping-nav-container">
        <h3>Browse Categories</h3>
        <input
          type="checkbox"
          id="men clothing"
          className="browse-option"
          onChange={(e) => {
            BrowseOption(e.target);
          }}
        />
        <label htmlFor="men clothing">Men Clothing</label>

        <input
          type="checkbox"
          id="jewelery"
          className="browse-option"
          onChange={(e) => {
            BrowseOption(e.target);
          }}
        />
        <label htmlFor="jewelry">Jewelry</label>

        <input
          type="checkbox"
          id="electronics"
          className="browse-option"
          onChange={(e) => {
            BrowseOption(e.target);
          }}
        />
        <label htmlFor="electronics">Electronics</label>

        <input
          type="checkbox"
          id="women clothing"
          className="browse-option"
          onChange={(e) => {
            BrowseOption(e.target);
          }}
        />
        <label htmlFor="women clothing">Women Clothing</label>
      </section>
      <section id="filter-options" className="shopping-nav-container">
        <h3>Filter By Price</h3>
        <input
          type="checkbox"
          id="20" /* price range 0-20 */
          className="filter-option"
          onChange={(e) => {
            FilterOption(e.target);
          }}
        />
        <label htmlFor="20">$0-$20</label>

        <input
          type="checkbox"
          id="100" /* price range 21-100 */
          className="filter-option"
          onChange={(e) => {
            FilterOption(e.target);
          }}
        />
        <label htmlFor="21-100">$21-$100</label>

        <input
          type="checkbox" /* price range 101-200 */
          id="200"
          className="filter-option"
          onChange={(e) => {
            FilterOption(e.target);
          }}
        />
        <label htmlFor="101-200">$101-$200</label>

        <input
          type="checkbox"
          id="201" /* price range 201 */
          className="filter-option"
          onChange={(e) => {
            FilterOption(e.target);
          }}
        />
        <label htmlFor="201">$201+</label>
      </section>
    </article>
  );
};

export default ShoppingNavigationComponent;
