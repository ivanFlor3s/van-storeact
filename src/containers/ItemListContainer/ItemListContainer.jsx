import React from "react";
import "./ItemListContainer.style.scss";
import { Card } from "../../components/Card";
import { Row, Col } from "react-bootstrap";

const CardList = [1,2,3,4,5,6,7];
const link = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'

export const ItemListContainer = (props) => (
  <>
  <div className = "ContainerList">
    <h1> {props.greeting} </h1>
    <hr />
    <p>Map de homeros TEST</p>
    <p>IF en MAP: href en <strong>Homero 6</strong>  </p>
    <Row>
      {CardList.map(( val, index) => {
        if (index === 5 ) {
          return (
            <Col>
              <Card   url={link}  indice={index + 1}></Card>
            </Col>
          );
        }
        else{
          return (
            <Col>
              <Card  indice={index + 1}></Card>
            </Col>
          )
        }
      })}
    </Row>

  </div>
  </>
);

export default ItemListContainer;
