import React from "react";
import "./Item.style.scss";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Item = ({ title, img, price, id }) => {
  return (
    <>
      <Card className="margin-card" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <hr />
          <h3>Precio: ${price}.00</h3>
          <Card.Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
            perspiciatis quas, corporis deleniti aperiam nesciunt
            exercitationem, repellendus nihil id assumenda aliquid consequatur
            voluptatem, harum quaerat dicta eveniet ex architecto sit.
          </Card.Text>
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
