import React from "react";
import "./CartItem.style.scss";
import { Row, Col } from "react-bootstrap";
import { ItemCount } from "../ItemCount";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons"

export const CartItem = () => {
  return (
    <>
      <Row className="mt-2">
        <Col xs={2}>
          <img
            src="/images/burguer-mini.jpg"
            className="cart-list-img" 
            alt=""
          />
        </Col>
        <Col xs={4}>
          <Row>
            <h3>Nombre del articulo</h3>
          </Row>
          <Row>
            <Col xs={4}>Cantidad:</Col>
            <Col xs={8}>
              <ItemCount
                prod={{ nombre: "Remera", stock: 12 }}
                initial={1}
                inCartList={true}
              ></ItemCount>
            </Col>
          </Row>
        </Col>
        <Col xs={3}>
          <h3>Precio: $1800</h3>
          <p>Subtotal: $99999 </p>
        </Col>
        <Col xs={3}>
          <div className="btn text-danger">

            <FontAwesomeIcon  icon={faTrash}/>
            Borrar
          </div>

          
         
        </Col>
      </Row>
    </>
  );
};
