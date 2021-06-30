import React from "react";
import "./ItemDetail.style.scss";
import { Col, Row, Image, Container, Badge, Card } from "react-bootstrap";
import { ItemCount } from "../ItemCount";
import StarRatings from "react-star-ratings";
//https://codepen.io/ekeric13/project/editor/DkJYpA Sandbox de stars cmponents

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
                <ItemCount
                  prod={productoMock}
                  initial={1}
                  onAdd={foo}
                ></ItemCount>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
