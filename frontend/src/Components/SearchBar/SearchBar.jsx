import React, { useState } from 'react';
import './SearchBar.css'; 

const SearchBar = ({ placeholder = "Search", onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value); // Passa il termine di ricerca al componente genitore
  };

  const clearSearch = () => {
    setSearchTerm("");
    onSearch(""); // Passa una stringa vuota per mostrare tutti gli elementi
  };

  return (
    <div className="search-bar">
      <span className="search-icon">&#128269;</span> 
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder={placeholder}
        className="search-input"
      />
      {searchTerm && <span className="clear-icon" onClick={clearSearch}>✖</span>} 
    </div>
  );
};

export default SearchBar;
