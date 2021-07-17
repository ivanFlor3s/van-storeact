import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { NavbarComponent } from "./components/NavbarComponent";
import { ItemListContainer } from "./containers/ItemListContainer";
import { ItemDetailContainer } from "./containers/ItemDetailContainer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./containers/Home";
import { Cart } from "./components/Cart";
import { CartComponentContext } from "./context/CartContext";
import { ProductContextComponent } from "./context/ProductsContext";
import {CheckoutContainer} from "./containers/CheckoutContainer"

//TOSEE Api de los simpson - sandbox https://codesandbox.io/s/1zko6?file=/src/Character.js y api https://thesimpsonsquoteapi.glitch.me/
//NOTE las imagenes se estan guardando en una carpeta de Images dentro de "public"

function App() {
  return (
    <CartComponentContext>
      <ProductContextComponent>
        <BrowserRouter>
          <NavbarComponent cantidad={0}></NavbarComponent>
          <Switch>
            <Route
              path="/category/:categoryId"
              component={ItemListContainer}
            ></Route>
            <Route path="/item/:id" component={ItemDetailContainer}></Route>
            <Route path="/cart" component={Cart}></Route>
            <Route path="/checkoutahora" component= {()=> { return (<h1>Hola </h1>)} }> </Route>
            <Route exact path="/" component={Home}></Route>
            <Route path="*" component={() => <h1>404!!!!</h1>}></Route>
          </Switch>
        </BrowserRouter>
      </ProductContextComponent>
    </CartComponentContext>
  );
}

export default App;
