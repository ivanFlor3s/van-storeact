
import "./Item.style.scss";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import {  useEffect } from "react";

export const Item = ({ producto}) => {


  
  // useEffect(() => {
  //   const prod = productosList.find( element => element.idProducto === id)
  //   setProducto(prod)
  // }, [])

  return (
    <>
      <Card className="margin-card animated fadeIn" style={{ width: "18rem" }}>
        <Link to={`/item/${producto.idProd}`}>
        
          <Card.Img variant="top" src={producto.img} />
        </Link>
        <Card.Body>
          <Card.Title>{producto.title}</Card.Title>
          <hr />
          <h3>Precio: ${producto.price}.00</h3>
          
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            rel="noreferrer"
            target="_blank"
          >
            <Button variant="success" className="m-1"> Comprar</Button>
          </a>
          
            <Button as={Link} to={`/item/${producto.idProd}`} variant="warning" className="m-1"> Detalle</Button>
        </Card.Body>
      </Card>
    </>
  );
};
