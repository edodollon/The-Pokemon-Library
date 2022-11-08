import { useState } from "react";
import searchStyle from "../styles/Search.module.scss";

function SearchBar({ submitSearch, query, setQuery }) {
  const [focus, setFocus] = useState(false);

  function handleEnter(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      e.target.blur();
    }
  }

  return (
    <div>
      <form onSubmit={submitSearch}>
        <div
          className={`${searchStyle.searchbar} ${
            focus && searchStyle["input-is-focused"]
          }`}
        >
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.currentTarget.value)}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            onKeyUp={handleEnter}
            placeholder="Search for a Card"
          />
          <button
            type="submit"
            className={focus ? searchStyle["button-is-focused"] : undefined}
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
