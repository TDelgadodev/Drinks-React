import { Formik, Field, ErrorMessage } from "formik";
import { Form, Row, Col, Button } from "react-bootstrap";
import * as Yup from "yup";
import useCategories from "../../hooks/useCategories";
import useDrinks from "../../hooks/useDrinks";
export const SearchForm = () => {


  const { categories } = useCategories();
  const {getDrinks, loading} = useDrinks()
  

  const initialValues = {
    ingredient: "",
    category: "",
  };

  const validationSchema = Yup.object({
    ingredient: Yup.string().required("El nombre es obligatorio"),
    category : Yup.string().required('La categoria es requerida')
  });

  const handleSubmit = (values) => {
    getDrinks(values)
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => (
        <Form onSubmit={formik.handleSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group>
                <Form.Label
                  htmlFor="ingredient"
                >
                  Ingrediente de la bebida
                </Form.Label>
                <Field
                  id="ingredient"
                  type="text"
                  placeholder="Ej. tequila, Vodka"
                  name="ingredient"
                  as={Form.Control}
                  className="shadow"
                ></Field>
                <ErrorMessage
                  name="ingredient"
                  component={Form.Text}
                  className="text-danger"
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label
                  htmlFor="category"
                >
                  Categoría de la bebida
                </Form.Label>
                <Field
                  className="shadow"
                  id="category"
                  name="category"
                  as={Form.Select}
                >
                  <option value="" defaultValue="" hidden>
                    Seleccione categoría...
                  </option>
                  {
                    categories.map((category) => (
                      <option value={category.strCategory} key={category.strCategory}>
                        {
                          category.strCategory
                        }
                      </option>
                    ))
                  }
                </Field>
                <ErrorMessage
                  name="category"
                  component={Form.Text}
                  className="text-danger ms-2"
                ></ErrorMessage>
              </Form.Group>
            </Col>
          </Row>
          <Row className="justify-content-end mt-3">
            <Col md={3}>
              <Button
                variant="danger"
                disabled={loading}
                className="w-100"
                type="submit"
              >
                {loading ? 'Buscando' : 'Buscar bebidas'}
              </Button>
            </Col>
          </Row>
        </Form>
      )}
    </Formik>
  );
};
