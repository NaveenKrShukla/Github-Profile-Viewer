import React from "react";

const FilterBar = ({
  sortBy,
  setSortBy,
  selectedLang,
  setSelectedLang,
  languages,
}) => {
  return (
    <div className="filter-bar">
      <div className="filter-group">
        <label>Sort by: </label>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="updated">Last Updated</option>
          <option value="stars">Stars</option>
        </select>
      </div>

      <div className="filter-group">
        <label>Filter by Language: </label>
        <select
          value={selectedLang}
          onChange={(e) => setSelectedLang(e.target.value)}
        >
          <option value="all">All</option>
          {languages.map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterBar;
