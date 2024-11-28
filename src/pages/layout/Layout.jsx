import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { PropTypes } from "prop-types";
import "./Layout.css";

function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
