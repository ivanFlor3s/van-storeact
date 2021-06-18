import React, { useEffect, useState } from "react";
import "./ItemList.style.scss";
import { getDataMLA } from "../../utils/helpers";
import { Container, Row, Col } from "react-bootstrap";
import { Item } from "../../components/Item/Item";

export const ItemList = () => {
  const [productos, setProds] = useState([]);

  const setData = async () => {
    const respuesta = await getDataMLA("Zapatillas");
    //Agrego timeout para apreciar que hay una espera
    setTimeout(() => {
      let aux = respuesta.map((element) => {
        return {
          img: element.thumbnail,
          title: element.title,
          price: element.price,
        };
      });
      setProds(aux);
    }, 1000);
  };

  useEffect(() => {
    setData();
    return () => {
      console.log("Me muero");
    };
  }, []);

  return (
    <>
      {productos.length === 0 ? "No tengo datos para mostrar" : "Tengo datos :)"}
      <h1>Ahora vendemos zapatillas</h1>
      <Container>
        {/* <CardColumns>
          {productos.map((element) => {
            return <Item img = {element.img} title={element.title} price={element.price} ></Item>
            })
          }
          
        </CardColumns> */}
        <Row>
          {productos.map((element, index) => {
            return (
              <Col xs={4} key={index}>
                <Item
                  img={element.img}
                  title={element.title}
                  price={element.price}
                ></Item>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};
