import React from 'react';
import './OpinionInput.style.scss';
import { Col, Row, Form } from 'react-bootstrap';
import StarRatings from "react-star-ratings"
import { useState } from 'react';
import Swal from "sweetalert2"
import {AgregarObservacion} from "../../utils/helpers"

export const OpinionInput = ({idProducto, parentFunc}) => {

  const [rate, setRate] = useState(3)

  const [form, setForm] = useState({ observacion: "", ts: new Date(), rate: rate })

  const changeRating = (newRate) => {
    console.log('nueva rate', newRate)
    setRate(newRate)
    setForm({ ...form, rate: newRate })
    console.log('estado', rate)
  }

  const addComment = () => {
    if(form.observacion.length < 15 ){
      Swal.fire({
        title: 'Error',
        text: 'El comentario tiene que tener mas de 15 caracteres',
        icon: 'error'
      })
    }
    else {
      Swal.fire({
        title: 'Aguarde',
        text: 'Publicando su comentario',
        icon: 'info',
        allowOutsideClick: false
      })
      Swal.showLoading()
      AgregarObservacion(idProducto, form).then(() => {
        console.log("se agrego la obs")
        Swal.fire({
          title: 'Comentario publicado',
          icon: 'success',

        })
      } )
      parentFunc()
      setForm({...form, observacion: "", ts: new Date()})
    }
  }

  return (
    <>
      
      <Row className="m-3" >
        <h4 style={{color: 'white', marginBottom:'25px'}}>Queremos saber que pensas de nuestras hamburguesas</h4>
        <Col xs={8}>
        <Form.Control
          as="textarea"
          value={form.observacion}
          placeholder="Deja tu resenia aca"
          style={{ height: "100px" }}
          onInput={(e) => setForm({ ...form, observacion: e.target.value })}
        />
        </Col>
        <Col xs={4}>
          <Row className="m-3">
            
          <StarRatings
            rating={rate}
            numberOfStars={5}
            changeRating={changeRating}
            starRatedColor="rgb(13,110,253)"
 
            starDimension="30px"
            starSpacing="3px"
            starHoverColor="rgb(133 183 255)"
          
          />
          
          </Row>
          <Row className="m-3">
            <button className="btn btn-primary" onClick={addComment}>Subir comentario</button>
          </Row>
        </Col>
        
      </Row>
    </>
  )
};