import { useEffect } from "react";
import { createContext, useState } from "react";
import { getDataMLA } from "../utils/helpers";

export const ProductContext = createContext();

export const ProductContextComponent = ({ children }) => {
  const [zapatillas, setZapatillas] = useState([]);
  const [autos, setAutos] = useState([]);

  useEffect(() => {
    const setData = async (categoria) => {
      const respuesta = await getDataMLA(categoria);
      //Agrego timeout para apreciar que hay una espera

      let aux = respuesta.map((element) => {
        return {
          category: categoria,
          idProd: element.id,
          img: element.thumbnail,
          title: element.title,
          price: element.price,
        };
      });

      if (categoria === 'Zapatillas') {
        setZapatillas(aux)
      } else if (categoria === 'Autos'){
        setAutos(aux)
      } 
    };

    setData("Autos");
    setData("Zapatillas");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getProductos = (categoria) => {
      if (categoria === 'Zapatillas'){
          return zapatillas
      }
      if (categoria === 'Autos') {
          return autos
      }
  }

  return (
    <ProductContext.Provider value={{autos, zapatillas, getProductos}}>{children}</ProductContext.Provider>
  );
};
