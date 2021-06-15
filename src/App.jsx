import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Col, Row } from "react-bootstrap";
import { NavbarComponent } from "./components/NavbarComponent";
import { ItemListContainer} from "./containers/ItemListContainer";
import {ItemCount} from "./components/ItemCount"



//TOSEE Api de los simpson - sandbox https://codesandbox.io/s/1zko6?file=/src/Character.js y api https://thesimpsonsquoteapi.glitch.me/
//NOTE las imagenes se estan guardando en una carpeta de Images dentro de "public"

function App() {
  return (
    <div className="">
    <NavbarComponent></NavbarComponent>
    
    <Container className="mt-3">
      <ItemListContainer greeting="Saludos desde App.jsx">
      </ItemListContainer>
    </Container>
    <Container>
      <Row>
        <Col xs= {5}>
          <ItemCount></ItemCount>
        
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default App;
