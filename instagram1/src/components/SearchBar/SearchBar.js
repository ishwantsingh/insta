import React from "react";
import image1 from "../SearchBar/ig_search_bar.png";
import "./SearchBar.css";

function SearchBar(props) {
  return (
    <div className="searchBar">
      <img src={image1} alt="Search Bar" className="image1" />
    </div>
  );
}

export default SearchBar;
