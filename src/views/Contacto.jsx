import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Contacto = () => {
  return (
    <>
      <div className="col-12 col-sm-10 col-md-6 mx-auto mt-5">
        <h1>Cuéntanos, ¿En qué te podemos ayudar?</h1>

        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Correo</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Descripción</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>

          <Button variant="danger" type="submit">
            Enviar
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Contacto;
