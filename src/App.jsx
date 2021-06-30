import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { NavbarComponent } from "./components/NavbarComponent";
import { ItemListContainer} from "./containers/ItemListContainer";
import { ItemDetailContainer } from "./containers/ItemDetailContainer";
import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./containers/Home"

//TOSEE Api de los simpson - sandbox https://codesandbox.io/s/1zko6?file=/src/Character.js y api https://thesimpsonsquoteapi.glitch.me/
//NOTE las imagenes se estan guardando en una carpeta de Images dentro de "public"

function App() {
  let [cantidad] = useState(0);


  return (

    <BrowserRouter>
      <NavbarComponent cantidad={cantidad}></NavbarComponent>
      <Switch>
        <Route exact path="/" component={Home} ></Route>
        <Route  path="/category/:categoryId" component={ItemListContainer}></Route>
        <Route  path="/item/:id" component={ItemDetailContainer}></Route>
        <Route path="*" component={()=> <h1>404!!!!</h1>}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
