import React, { useEffect, useState } from "react";
import "./ItemList.style.scss";
import { getDataMLA } from "../../utils/helpers";
import { Container, Row, Col } from "react-bootstrap";
import { Item } from "../../components/Item/Item";

export const ItemList = ({productosList}) => {
  return (
    <>
      <h1>Ahora vendemos zapatillas</h1>
      <Container>
        
        <Row>
          {productosList.map((element, index) => {
            return (
              <Col xs={4} key={index}>
                <Item
                  img={element.img}
                  title={element.title}
                  price={element.price}
                  id = {element.idProd}
                ></Item>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};
