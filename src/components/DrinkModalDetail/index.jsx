import { Col, Image, Modal, Row } from "react-bootstrap";
import useDrinks from "../../hooks/useDrinks";

export const DrinkModalDetail = () => {
  const { showModal, handleSnowModalClick, recipe } = useDrinks();
  const { strDrink, strDrinkThumb, strInstructions } = recipe;

  const showIngredient = () => {
    const ingredient = [];
    for (let i = 1; i <= 15; i++) {
      if (recipe[`strIngredient${i}`]) {
        ingredient.push(
        <li>
            {recipe[`strIngredient${i}`]} | {recipe[`strMeasure${i}`]}
            
        </li>
        );
      }
    }
    return ingredient;
  };
  return (
    <Modal show={showModal} onHide={handleSnowModalClick} size="xl">
      <Row>
        <Col>
          <Image
            src={strDrinkThumb}
            alt={`Img from ${strDrink}`}
            fluid
            className="rounded-start"
          />
        </Col>
        <Col>
          <Modal.Header closeButton>
            <Modal.Title>{strDrink}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h2>Instructions</h2>
            <p>{strInstructions}</p>
            <h2>Ingredients & Measures</h2>
            <ul>{showIngredient()}</ul>
            
          </Modal.Body>
        </Col>
      </Row>
    </Modal>
  );
};
