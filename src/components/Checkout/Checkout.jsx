import React from "react";
import "./Checkout.style.scss";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useState } from "react";
import Swal from 'sweetalert2';

export const Checkout = ({postInfo}) => {

  const [form, setForm] = useState({ email: "", name: "", phone: "" })

  const [validated, setValidated] = useState(false);
  const [valid, setValid] = useState(false)

  const validateMail = ()=>{
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(form.email).toLowerCase())
  }

  const validarDatos = () => {
    
    if (validateMail() && form.name.length > 5 && form.phone > 8 ){
      postInfo(form)
    } else {
      Swal.fire({
        title: 'Error',
        
        html: 'Los campos son incorrectos' +
        '<ul>' +
          '<li>Debe ser un mail  valido </li> <li>El telefono los 8</li> <li>El nombre debe supearar los 5 caracteres</li></ul> ',
        template: 'error',
        icon:'error',
        allowOutsideClick: false


      })
    }
  }

  
  return (
    <>
    <div className="custom-card">
      <h3>Info</h3>

      <Form noValidate validated={validated}  >
        <Row>
          <Col xs={4}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text"  required  placeholder="Ingrese su nombre" onInput={(e) => setForm({ ...form, name: e.target.value })} />
            </Form.Group>
          </Col>
          <Col xs={4}>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Telefono</Form.Label>
              <Form.Control type="number" required placeholder="Ingrese su telefono" onInput={(e) => setForm({ ...form, phone: e.target.value })} />
            </Form.Group>
          </Col>
          <Col xs={4}>
            <Form.Group className="mb-3" controlId="formBasicEmail"> 
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" required placeholder="Ingrese su email"  onInput={(e) => setForm({ ...form, email: e.target.value })}/>
            </Form.Group>
          </Col>
        </Row>

        <Button variant="primary" type="button" onClick={() => validarDatos()}>
          Submit
        </Button>
      </Form>
    </div>
    </>
  );
};
