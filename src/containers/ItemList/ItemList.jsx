
import "./ItemList.style.scss";
import { Container, Row, Col } from "react-bootstrap";
import { Item } from "../../components/Item/Item";

export const ItemList = ({productosList, categoria}) => {
  return (
    
    <>
      <h1>Vendiamos hamburguesas, ahora vendemos... <strong style={{color:"blue"}}>{categoria}</strong></h1>
      <Container className="animated fadeIn">
        <Row>
          {productosList.map((element, index) => {
            return (
              <Col xs={4} key={index}>
                <Item
               
                  img={element.img}
                  title={element.title}
                  price={element.price}
                  id = {element.idProd}
                ></Item>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};
