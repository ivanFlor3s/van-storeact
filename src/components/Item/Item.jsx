import React from 'react';
import './Item.style.scss';
import {Card, Button} from "react-bootstrap"

export const Item = ({title, img, price}) => {


  return (
    <>
      <Card className= "margin-card" style={{ width: '18rem' }}>
          <Card.Img variant="top" src= {img} />
          <Card.Body>
            <Card.Title>{ title }</Card.Title>
            <hr />
            <h3>Precio: {price}</h3>
            <Card.Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque perspiciatis quas, corporis deleniti aperiam nesciunt exercitationem, repellendus nihil id assumenda aliquid consequatur voluptatem, harum quaerat dicta eveniet ex architecto sit.
            </Card.Text>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
              <Button variant="success" > Comprar</Button>

            </a>
          </Card.Body>
        </Card>
    </>
  )
};