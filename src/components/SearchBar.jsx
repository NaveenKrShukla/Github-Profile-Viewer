import React from "react";

const SearchBar = ({ username, setUsername, onSearch }) => {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") onSearch();
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search GitHub username..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <button onClick={onSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
