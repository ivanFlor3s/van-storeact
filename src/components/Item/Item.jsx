import React from "react";
import "./Item.style.scss";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Item = ({ title, img, price, id }) => {
  return (
    <>
      <Card className="margin-card animated fadeIn" style={{ width: "18rem" }}>
        <Link to={`/item/${id}`}>
        
          <Card.Img variant="top" src={img} />
        </Link>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <hr />
          <h3>Precio: ${price}.00</h3>
          
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            rel="noreferrer"
            target="_blank"
          >
            <Button variant="success" className="m-1"> Comprar</Button>
          </a>
          
            <Button as={Link} to={`/item/${id}`} variant="warning" className="m-1"> Detalle</Button>
        </Card.Body>
      </Card>
    </>
  );
};
