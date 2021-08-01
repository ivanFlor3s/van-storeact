import "./ItemList.style.scss";
import { Container, Row, Col } from "react-bootstrap";
import { Item } from "../../components/Item/Item";

export const ItemList = ({ productosList, categoria }) => {
  return (
    <>
      
      <Container className="animated fadeIn">
        <Row>
          {productosList.map((element, index) => {
            return (
              <Col xs={4} key={index}>
                <Item producto={element}></Item>
              </Col>
            );
          })}
        </Row> 
        
      </Container>
    </>
  );
};
