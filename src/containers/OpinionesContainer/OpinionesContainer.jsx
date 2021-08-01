import React from "react";
import "./OpinionesContainer.style.scss";
import { useEffect } from "react";
import { Form, FloatingLabel } from "react-bootstrap";
import { GetObservaciones } from "../../utils/helpers";
import { useState } from "react";
import { Opinion } from "../../components/Opinion";
import {OpinionInput} from "../../components/OpinionInput"

export const OpinionesContainer = ({ idProducto, prodRateSet }) => {
  const [observaciones, setObservaciones] = useState([]);

  const traerObservaciones = async () => {
    let RESULTOBS = await GetObservaciones(idProducto);
    console.log(RESULTOBS);
    RESULTOBS = RESULTOBS.sort((a,b) =>  b.ts.seconds -  a.ts.seconds)
    setObservaciones([...RESULTOBS]);
    if(RESULTOBS.length > 0) {

      let sum = RESULTOBS.map(e => e.rate).reduce((previous, current) => current += previous);
      console.log(sum / RESULTOBS.length)
      prodRateSet(sum / RESULTOBS.length)

    }
  };

  useEffect(() => {
    

    traerObservaciones();
  }, []);

  return (
    <>
      <h2>Resenias y opiniones </h2>
      <hr />
      <div style={{overflow: 'hidden',overflowY: 'scroll', height: '350px'}}>

        {observaciones.length > 0 ? (
          observaciones.map((element, index) => {
            return <Opinion key={index} opinion={element}></Opinion>;
          })
        ) : (
          <p>Sin opiniones</p>
        )}
      </div>

      <OpinionInput idProducto={idProducto} parentFunc={traerObservaciones}></OpinionInput>

    </>
  );
};
