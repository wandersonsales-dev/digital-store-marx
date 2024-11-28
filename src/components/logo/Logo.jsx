import { PropTypes } from "prop-types";
import "./Logo.css";

function Logo({ logo }) {
  return (
    <div className="logo">
      <img src={logo} alt="logo" />
    </div>
  );
}

Logo.propTypes = {
  logo: PropTypes.string.isRequired,
};

export default Logo;
