
import "./ItemList.style.scss";
import { Container, Row, Col } from "react-bootstrap";
import { Item } from "../../components/Item/Item";

export const ItemList = ({productosList, categoria}) => {
  return (
    
    <>
      <h1 style= {{marginTop: '20px', textAlign: 'center'}} >Vendiamos hamburguesas, ahora vendemos... <strong style={{background: "yellow", padding: '10px', borderRadius:'10px'}}>{categoria}</strong></h1>
      <Container className="animated fadeIn">
        <Row>
          {productosList.map((element, index) => {
            return (
              <Col xs={4} key={index} >
                <Item
                  
                  producto = {element}
                ></Item>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};
