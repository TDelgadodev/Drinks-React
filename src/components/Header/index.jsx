import { Link } from "react-router-dom";
import styles from "./index.module.css";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faRightToBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import useAuth from "../../hooks/UseAuth";

export const Header = () => {
  const { user,logout } = useAuth();

  const handleLogout = () => {
    logout()
  }
  return (
    <header className={`d-flex justify-content-between p-3  ${styles.header}`}>
      <h1>Search Drinks</h1>
      <div className="d-flex gap-2 align-items-center">
        {user ? (
          <div className="d-flex gap-2">
            <Link to={"/user/profile"} className="btn btn-lg btn-outline-light d-flex gap-2 align-items-center">
              <FontAwesomeIcon icon={faUser} size="lg"/>
              <span>{user.name}</span>
            </Link>
            <Button onClick={handleLogout} variant="outline-light" size="lg">
              <FontAwesomeIcon icon={faRightToBracket} />
            </Button>
          </div>
        ) : (
          <Link to={"/login"} className="btn btn-lg btn-outline-light">
            <FontAwesomeIcon icon={faRightToBracket} />
          </Link>
        )}
        <div className="position-relative">
          <Button variant="outline-light" size="lg">
            <FontAwesomeIcon icon={faCartShopping} />
          </Button>
        </div>
      </div>
    </header>
  );
};
