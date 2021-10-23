import React, { useState } from 'react';

const Search = ({ term, searchKeyword }) => {
  const handleSearch = (e) => {
    searchKeyword(e.target.value);
  };
  return (
    <>
      <input
        type="text"
        placeholder="Enter your book name"
        className="input-field"
        onChange={handleSearch}
        value={term}
      />
    </>
  );
};

export default Search;
