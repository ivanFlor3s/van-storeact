import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { NavbarComponent } from "./components/NavbarComponent";
//import { ItemListContainer} from "./containers/ItemListContainer";
import {ItemDetailContainer} from "./containers/ItemDetailContainer"
import { useState } from "react";



//TOSEE Api de los simpson - sandbox https://codesandbox.io/s/1zko6?file=/src/Character.js y api https://thesimpsonsquoteapi.glitch.me/
//NOTE las imagenes se estan guardando en una carpeta de Images dentro de "public"

function App() {
  
  let [cantidad, setCantidad] = useState(0)

  const OnAdd = (cant)=>{
    console.log("Agrego al carroide")
    setCantidad(cant)
  }

  return (
    <div >
    <NavbarComponent cantidad={cantidad}></NavbarComponent>
    
    
    {/* <ItemListContainer callback={OnAdd} >
    </ItemListContainer>  */}
    <ItemDetailContainer></ItemDetailContainer>

    
    </div>
  );
}

export default App;
