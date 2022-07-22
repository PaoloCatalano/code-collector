import React from "react";

export default function SearchForm({ term, setTerm }) {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="main__search-form">
      <label htmlFor="search">Search Term</label>
      <input
        type="text"
        name="search"
        onChange={(e) => setTerm(e.target.value)}
        maxLength={50}
        value={term}
      />
    </form>
  );
}
