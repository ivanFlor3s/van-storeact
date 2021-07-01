import React from "react";
import "./ItemDetail.style.scss";
import { Link } from "react-router-dom";
import { Col, Row, Image, Container, Badge, Card, Button } from "react-bootstrap";
import { ItemCount } from "../ItemCount";
import StarRatings from "react-star-ratings";
import { useState, useEffect } from "react";
//https://codepen.io/ekeric13/project/editor/DkJYpA Sandbox de stars cmponents

export const ItemDetail = ({ title, img, price }) => {

  const [cantidad, setCantidad]= useState(0)
  const onAdd = (cant) => {
    console.log(`Se agregaron ${cant} productos`);
    setCantidad(cantidad + cant )
  };

  const productoMock = {
    nombre: title.substring(0, 21),
    stock: 15,
  };

  useEffect(() => {
    
    
  }, [cantidad])

  
  return (
    <>
      <Container className="mt-3 fadeIn animated">
        <Row>
          <Col xs={6}>
            <Image src={img.replace("-I.jpg", "-O.jpg")} />
          </Col>
          <Col xs={4}>
            <Card>
              <Card.Body>
                <h2>{title}</h2>
                <Row>
                  <Col xs={6}>
                    <StarRatings
                      rating={4}
                      numberOfStars={5}
                      starRatedColor="rgb(13,110,253)"
                      starDimension="15px"
                      starSpacing="3px"
                      starHoverColor="#ffffff"
                    />
                  </Col>
                  <Col xs={6}>
                    <h2>
                      <Badge className="badge-success" bg="success">
                        ${price}
                      </Badge>
                    </h2>
                  </Col>
                </Row>

                <h3>Descripcion</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum modi nihil dolor similique ipsa natus earum saepe,
                  ullam facere nisi animi quis ratione consequuntur, culpa, at
                  ut itaque soluta exercitationem
                </p>

                { cantidad > 0 ? 
                <>
                  <Link to="/cart">
                    <Button  className="d-block animated fadeIn" variant="primary">  Terminar compra  </Button>
                  </Link>  
                  <Button  className="d-block mt-2 animated fadeIn" variant="secondary" onClick={()=>setCantidad(0)}>  Reset </Button>
                </>

                : 
                <ItemCount
                  prod={productoMock}
                  initial={1}
                  onAdd={onAdd}
                ></ItemCount>  }
                
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
