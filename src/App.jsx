import logo from "./logo.svg";
import "./App.css";
import { Container, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { NavbarComponent } from "./components/shared/navbar";
import { CardComponent } from './components/index'

function App() {
  return (
    <div className="App">
      <NavbarComponent />

      
      <CardComponent/>
    </div>
  );
}

export default App;
