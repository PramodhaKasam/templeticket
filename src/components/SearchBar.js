import React, { useState } from "react";
import '../styles/searchbar.css'

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search by state..."
      className="search-bar"
      value={searchTerm}
      onChange={handleSearchChange}
    />
  );
};

export default SearchBar;
