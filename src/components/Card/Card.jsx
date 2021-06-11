import React from 'react';
import './Card.style.scss';
import { Image } from "react-bootstrap";
export const Card = (props) => (
    <>
      <a href={props.url} rel="noopener noreferrer" target="_blank">

      <Image
        src="https://i.pinimg.com/originals/5f/00/29/5f00290f9d34734812f314e3a8746195.jpg" alt="Homer" className="m-2 ojo-homero" fluid>
          
        </Image>
      </a>
        <h3>Homero {props.indice} </h3>
    </>
);

export default Card;