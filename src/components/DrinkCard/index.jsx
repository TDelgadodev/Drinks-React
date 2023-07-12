import { Button, Card, CardImg, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import useDrinks from "../../hooks/useDrinks";

export const DrinkCard = ({ drink }) => {
    const {strDrinkThumb,strDrink, idDrink} = drink;
    const {getRecipe} = useDrinks()
  return (
    <Col md={6} lg={3}>
      <Card className="mb-4">
        <CardImg variant="top" src={strDrinkThumb} alt={strDrink} />
        <Card.Body>
          <Card.Title>{drink.strDrink}</Card.Title>
          <Button variant={"warning"} className="w-100 text-uppercase mt-2" onClick={() => getRecipe(idDrink)}>
            Ver receta
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

DrinkCard.propTypes = {
  drink: PropTypes.object.isRequired,
  strDrinkThumb : PropTypes.string,
  strDrink : PropTypes.string.isRequired
};
