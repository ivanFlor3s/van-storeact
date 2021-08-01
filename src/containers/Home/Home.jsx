import React from "react";
import "./Home.style.scss";
import { Image } from "react-bootstrap";


export const Home = () => {
  
  return (
    <>
      <div className="container-landing animated fadeIn ">
        <div className="  home-title">
          <h1>En Burguereacts</h1>

          <p>
            Nuestra carne esta hecha de las mas finas vacas de{" "}
            <strong>Indonesia</strong>
          </p>
        </div>
        <Image
          src="/images/hamburguerLanding.jpeg"
          alt="landing-burguer"
          fluid
        />
       
      </div>
    </>
  );
};
