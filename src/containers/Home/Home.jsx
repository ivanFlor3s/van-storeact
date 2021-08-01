import React, { useEffect } from "react";
import "./Home.style.scss";
import { Image } from "react-bootstrap";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ProductContext } from "../../context/ProductsContext";
import { useContext, useState } from "react";

export const Home = () => {
  const productContext = useContext(ProductContext);

  const [top, setTop] = useState([]);

  useEffect(() => {
    const TOP = productContext.productos.slice(0, 4);
    setTop([...TOP]);
  }, []);
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
        <div className="carousel-home">
          <div className="corusel-burguer">
            <h1 className="text-nowrap">Algunos de nuestros productos</h1>
            <Carousel width="100%" infiniteLoop={true} autoPlay={true}>
              {top.length > 0 ? (
                top.map((element, index) => {
                  return (
                    <div key={index}>
                      <Image
                        src={element.image}
                        alt={element.title}
                        fluid
                        style={{height: '350px'}}
                      />
                      
                      <p className="legend">{element.title}</p>
                    </div>
                  );
                })
              ) : (
                <div>
                  <p className="legend">Sin nada que mostrar</p>
                </div>
              )}
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};
