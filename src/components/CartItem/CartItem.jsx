import React from "react";
import "./CartItem.style.scss";
import { Row, Col } from "react-bootstrap";
import { ItemCount } from "../ItemCount";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons"



export const CartItem = ( {cartProduct, onQuitar} ) => {
  

  const remove = () => {
    onQuitar(cartProduct.itemList.id)
  }

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
        <Col xs={6}>
          <Row>
            <h3>{ cartProduct.itemList.title }</h3>
          </Row>
          <Row >
            <Col xs={2} style={{padding: '30px 0px'}}>Cantidad:</Col>
            <Col xs={4}>
              <ItemCount
              style={{padding: '20px 0px'}}
                initial={ cartProduct.cantidad }
                inCartList={true}
                stock = {15}
              ></ItemCount>
            </Col>
          </Row>
        </Col>
        <Col xs={3}>
          <h3>Precio: ${cartProduct.itemList.price}</h3>
          <p>Subtotal: ${cartProduct.subTotal} </p>
        </Col>
        <Col xs={1}>
          <div className="btn text-danger" onClick={remove} >

            <FontAwesomeIcon  icon={faTrash}/>
            Borrar
          </div>
        </Col>

      </Row>
    </>
  );
};
