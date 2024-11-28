import { RiSearchLine } from "react-icons/ri";
import "./ButtonSearch.css";
import { PropTypes } from "prop-types";

function ButtonSearch({ onClick, isActive }) {
  return (
    <button className="button-search button-without-style" onClick={onClick}>
      <RiSearchLine
        color={isActive ? "var(--primary)" : "var(--light-gray-2)"}
        style={{ fontSize: "1.5rem" }}
      />
    </button>
  );
}

ButtonSearch.propTypes = {
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.boolean,
};

export default ButtonSearch;
