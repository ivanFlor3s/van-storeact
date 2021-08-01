import React from "react";
import "./ItemDetail.style.scss";
import { Link } from "react-router-dom";
import {
  Col,
  Row,
  Image,
  Container,
  Badge,
  Card,
  Button,
} from "react-bootstrap";
import { ItemCount } from "../ItemCount";
import { OpinionesContainer } from "../../containers/OpinionesContainer"
import StarRatings from "react-star-ratings";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

//https://codepen.io/ekeric13/project/editor/DkJYpA Sandbox de stars cmponents



export const ItemDetail = ({ prod }) => {
  const [cantidad, setCantidad] = useState(0);

  const cartContext = useContext(CartContext);

  const [prodRate, setProdRate] = useState(0)

  const onAdd = (cant) => {
    setCantidad(cant);
    //console.log(`Se agregaron ${cant} productos`);
    const shoppingItem = {
      prod,
      quantity: cant,
    };
    //console.log("shoppinItem que esta enviando CHILD ", shoppingItem);
    cartContext.addItem(shoppingItem);
  };

  return (
    <>
      <Container className="mt-3 fadeIn animated">
        <Row>
          <Col xs={6}>
            <Image src={prod.image} fluid />
          </Col>
          <Col xs={4}>
            <Card>
              <Card.Body>
                <h2>{prod.title}</h2>
                <Row>
                  <Col xs={6}>
                 {/* <small>{prodRate}</small> */}
                    <StarRatings
                      rating={prodRate}
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
                        ${prod.price}
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
              </Card.Body>
            </Card>

            <div className="mt-4">
              {cantidad > 0 ? (
                <>
                  <Link to="/cart">
                    <Button
                      className="d-block animated fadeIn"
                      variant="primary"
                    >
                      {" "}
                      Terminar compra{" "}
                    </Button>
                  </Link>
                </>
              ) : (
                <ItemCount
                  prod={{
                    nombre: prod.title.substring(0, 21),
                    stock: prod.stock,
                  }}
                  initial={1}
                  onAdd={onAdd}
                ></ItemCount>
              )}
            </div>
          </Col>
        </Row>
        <Row className="m-4">
            <OpinionesContainer idProducto={prod.id} prodRateSet={setProdRate}></OpinionesContainer>
        </Row>
      </Container>
    </>
  );
};
