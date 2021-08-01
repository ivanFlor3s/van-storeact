import React from "react";
import "./ItemCount.style.scss";
import { InputGroup, FormControl, Button, Form, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export const ItemCount = ({ prod, initial, onAdd, inCartList = false, onChangeCant }) => {
  let [cantidad, setCantidad] = useState(initial);

  const agregar = () => {
    if (cantidad < prod.stock) {
      setCantidad(cantidad + 1);
    }
  };

  const onInputChange = (e) => {
    
    const inputValue = e.target.value;
    if (inputValue > prod.stock) {
      setCantidad(prod.stock);
    } else if (inputValue < 0) {
      setCantidad(1);
    } else {
      setCantidad(inputValue);
    }
    if(inCartList){
     
      onChangeCant(inputValue)
    }
  };
  const quitar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  return inCartList ? (
    <>
      <InputGroup className="mt-4 mb-3">
        <Button variant="primary" onClick={quitar}>
          -
        </Button>
        <FormControl type="number" value={cantidad} onChange={onInputChange} />
        <Button variant="primary" onClick={agregar}>
          +
        </Button>
      </InputGroup>
    </>
  ) : (
    <>
      <Card>
        <Card.Body className="ItemCount">
          <Form>
            <Form.Group>
              <Form.Label>
                <h4>{prod.nombre}</h4>
              </Form.Label>
              <InputGroup className="mt-4 mb-3">
                <Button variant="primary" onClick={quitar}>
                  -
                </Button>
                <FormControl
                  type="number"
                  value={cantidad}
                  onChange={onInputChange}
                />
                <Button variant="primary" onClick={agregar}>
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
