import React from "react";
import "./ItemCount.style.scss";
import { InputGroup, FormControl, Button, Form, Card } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';








export const ItemCount = () => (



  <>
    <Card>
      <Card.Body className="ItemCount">
        <Form>
          <Form.Group >
            <Form.Label>Camisa Tiger</Form.Label>
            <InputGroup className="mt-4 mb-3">
              <Button variant="primary">-</Button>
              <FormControl type="number" />
              <Button variant="primary">+</Button>
            </InputGroup>
          </Form.Group>
        </Form>
        <div className="d-grip gap-2">
          <Button variant="success" className="d-block">
          <FontAwesomeIcon icon={faCartPlus} className="mr-2"/> Agregar al carrito
          </Button>
        </div>
      </Card.Body>
    </Card>
  </>
);

export default ItemCount;
