import { useState } from "react";

const SearchBar = ({ initialTerm, onSubmit }) => {
  const [term, setTerm] = useState(initialTerm);

  const onFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(term);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div className="input-group my-3">
        <input
          type="search"
          className="form-control rounded"
          placeholder="Search for a Book"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button type="submit" className="btn btn-outline-success">
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
