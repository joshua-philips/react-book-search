import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useFetch from './useFetch';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('chimamanda');
  let { data, isPending, error } = useFetch(
    `http://openlibrary.org/search.json?q=${
      searchQuery ? searchQuery : 'chimamanda'
    }`
  );
  let searchInput = '';

  const searchHandler = (e) => {
    e.preventDefault();
    if (searchInput) {
      setSearchQuery(searchInput);
    }
  };

  return (
    <div className="container">
      <>
        <h1>Book Search</h1>
        <form onSubmit={searchHandler}>
          <input
            type="text"
            placeholder="Enter your book name and press enter"
            className="input-field"
            onChange={(e) => {
              searchInput = e.target.value;
            }}
          />
          <button type="submit" className="button">
            Search
          </button>
        </form>
      </>
      {isPending && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      <ul className="list">
        {data &&
          !isPending &&
          !error &&
          data.docs.map((book) => {
            return (
              <Link
                to={`/${book.key.replace('/works/', '')}`}
                className="list-item link"
                key={book.key}
              >
                &nbsp;{book.title}
              </Link>
            );
          })}
      </ul>
    </div>
  );
};

export default Search;
