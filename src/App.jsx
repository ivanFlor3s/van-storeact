import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Image } from "react-bootstrap";
import { NavbarComponent } from "./components/shared/navbar";

function App() {
  return (
    <div className="App">
    <NavbarComponent></NavbarComponent>
    <Container>
      <Image
       src="https://i.pinimg.com/originals/5f/00/29/5f00290f9d34734812f314e3a8746195.jpg" alt="" className="mt-5 ojo-homero" fluid>
        
      </Image>
    </Container>
    
    </div>
  );
}

export default App;
