
import "./Item.style.scss";
import { Card, Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import {  useEffect } from "react";

export const Item = ({ producto}) => {

  return (
    <>
      <Card className="margin-card animated fadeIn Item" >
        <Link to={`/item/${producto.id}`}>
        
          <Card.Img variant="top" src={producto.image} alt={producto.title} />
        </Link>
        <Card.Body className="card-body">
          <Card.Title className="titel-card"><h2>{producto.title}</h2></Card.Title>
          
          
          <Row className="footer-card">
            <p>Precio</p>
            <Col xs={6}>
            
              <h3> ${producto.price}.00</h3>
            </Col>
            <Col xs={6}>
              <Button  as={Link} to={`/item/${producto.id}`} variant="warning" className="m-1 d-block"> Detalle</Button>

            </Col>
          </Row>
          
        </Card.Body>
      </Card>
    </>
  );
};
