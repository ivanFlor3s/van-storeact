import React from "react";
import "./ItemDetail.style.scss";
import { Col, Row, Image, Container,Badge } from "react-bootstrap";
import { ItemCount } from "../ItemCount";

export const ItemDetail = ({ title, img, price }) => {
  const foo = (cantidad) => {
    console.log(`Se agregaron ${cantidad} productos`);
  };

  const productoMock = {
    nombre: title.substring(0, 21),
    stock: 15,
  };

  return (
    <>
      <Container>
        <h1>{title}</h1>
        <hr />
        <Row>
          <Col xs={6}>
            <Image src={img} />
          </Col>
          <Col xs={4}>
            <h2>
              Precio <Badge className="badge-success" bg="success">${price}</Badge>
            </h2>
            
            <h3>Descripcion</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              modi nihil dolor similique ipsa natus earum saepe, ullam facere
              nisi animi quis ratione consequuntur, culpa, at ut itaque soluta
              exercitationem
            </p>
            <ItemCount prod={productoMock} initial={1} onAdd={foo}>
              
            </ItemCount>
          </Col>
        </Row>
      </Container>
    </>
  );
};
