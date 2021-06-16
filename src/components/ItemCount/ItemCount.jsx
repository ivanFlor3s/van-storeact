import React from "react";
import "./ItemCount.style.scss";
import { InputGroup, FormControl, Button, Form, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export const ItemCount = ({ prod, initial, onAdd }) => {
  let [cantidad, setCantidad] = useState(initial);

  return (
    <>
      <Card>
        <Card.Body className="ItemCount">
          <Form>
            <Form.Group>
              <Form.Label>
                <h4>{prod.nombre}</h4>
              </Form.Label>
              <InputGroup className="mt-4 mb-3">
                <Button
                  variant="primary"
                  onClick={() => {
                    if (cantidad > 1) {
                      setCantidad(cantidad - 1);
                    }
                  }}
                >
                  -
                </Button>
                <FormControl
                  type="number"
                  value={cantidad}
                  onChange={(e) => {
                    const inputValue = e.target.value;
                    if (inputValue > prod.stock) {
                      setCantidad(prod.stock);
                    } else if (inputValue < 0) {
                      setCantidad(1);
                    } else {
                      setCantidad(inputValue);
                    }
                  }}
                />
                <Button
                  variant="primary"
                  onClick={() => {
                    if (cantidad < prod.stock) {
                      setCantidad(cantidad + 1);
                    }
                  }}
                >
                  +
                </Button>
              </InputGroup>
            </Form.Group>
          </Form>
          <div className="d-grip gap-2">
            <Button
              variant="success"
              className="d-block"
              onClick={() => onAdd(cantidad)}
            >
              <FontAwesomeIcon icon={faCartPlus} className="mr-2" /> Agregar al
              carrito
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};
