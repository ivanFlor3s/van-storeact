import React, { useState } from "react";
import "./ItemListContainer.style.scss";
import { Row, Col } from "react-bootstrap";
import { ItemCount } from "../../components/ItemCount";



export const ItemListContainer = ({callback}) => {
  let producto1 = {
    nombre: `Triple bacon`,
    precio: 210,
    stock: 10
  }
  
  const [productos]=useState([producto1]);
  
  const sumarCarrito = (cant)=>{
    console.log(`Estoy sumando ${cant} al carrito`)
    callback(cant)
  }
  
  return (
  <>
    <Row>
      <Col xs={3}>
        <ItemCount prod={productos[0]} initial={1}  onAdd={sumarCarrito} ></ItemCount>
      </Col>
    </Row>
  </>
  )
};

export default ItemListContainer;
