import { Container } from "react-bootstrap";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import Styles from "./index.module.css";
import PropTypes from "prop-types";
export const MainLayout = ({ children }) => {
  return (
    <div className={Styles.main}>
      <Header />
      <Container className="mt-5">
        {children}
      </Container>
      <Footer />
    </div>
  );
};

MainLayout.propTypes = {
    children : PropTypes.node.isRequired
}