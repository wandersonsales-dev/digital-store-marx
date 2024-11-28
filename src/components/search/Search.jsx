import { PropTypes } from "prop-types";
import "./Search.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search({ onSubmit }) {
  const [searchValue, setSearchValue] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
    navigate(`/products?filter=${searchValue}`);
  };

  return (
    <form style={{ width: "100%" }} onSubmit={handleSubmit}>
      <input
        className="search"
        type="text"
        placeholder="Pesquisar produto..."
        style={{ width: "100%" }}
        value={searchValue}
        onChange={handleChange}
      />
      <input type="submit" className="hidden-input" tabIndex="-1" />
    </form>
  );
}

Search.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Search;
