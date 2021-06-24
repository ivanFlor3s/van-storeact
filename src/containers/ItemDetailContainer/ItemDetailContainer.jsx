import React from "react";
import { useState, useEffect } from "react";
import { getDataMLA } from "../../utils/helpers";
import "./ItemDetailContainer.style.scss";
import { ItemDetail } from "../../components/ItemDetail";

export const ItemDetailContainer = () => {
  const [producto, setProducto] = useState();

  const setData = async () => {
    const respuesta = await getDataMLA("Hamburguesa");

    setTimeout(() => {
      let aux = respuesta.map((element) => {
        return {
          img: element.thumbnail,
          title: element.title,
          price: element.price,
        };
      });
      setProducto(aux[2]);
    }, 2000);
  };

  useEffect(() => {
    setData();
    return () => {
      console.log("Hold the door");
    };
  }, []);

  if (producto) {
    return (
      <>
        <ItemDetail
          img={producto.img}
          title={producto.title}
          price={producto.price}
        ></ItemDetail>
      </>
    );
  } else {
    return <h1>No tengo producto detail para mostrar</h1>;
  }
};
