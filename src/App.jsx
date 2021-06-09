import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Image } from "react-bootstrap";
import { NavbarComponent } from "./components/shared/navbar";

//TOSEE Api de los simpson - sandbox https://codesandbox.io/s/1zko6?file=/src/Character.js y api https://thesimpsonsquoteapi.glitch.me/
//NOTE las imagenes se estan guardando en una carpeta de Images dentro de "public"

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
