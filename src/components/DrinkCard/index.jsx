import { Button, Card, CardImg, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import useDrinks from "../../hooks/useDrinks";
import styles from "./index.module.css";
import useCart from "../../hooks/useCart";

export const DrinkCard = ({ drink }) => {
  const { strDrinkThumb, strDrink, idDrink } = drink;
  const { handleDrinkIdClick } = useDrinks();
  const { addCart } = useCart()
  return (
    <Col md={6} lg={3}>
      <Card className="mb-4">
        <CardImg variant="top" src={strDrinkThumb} alt={strDrink} />
        <Card.Body>
          <Card.Title className={styles.drinkTitle}>
            {drink.strDrink}
          </Card.Title>
          <Button
            variant={"warning"}
            className="w-100 text-uppercase mt-2"
            onClick={() => {
              handleDrinkIdClick(idDrink);
            }}
          >
            Ver receta
          </Button>
          <Button variant="danger" className="w-100 text-uppercase mt-1" onClick={() => addCart(idDrink)}>
            Comprar
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

DrinkCard.propTypes = {
  drink: PropTypes.object,
  strDrinkThumb: PropTypes.string,
  strDrink: PropTypes.string,
};
