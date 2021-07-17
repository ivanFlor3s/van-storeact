import { getFirestore } from "../firebase/client";

//#region API MELI
const url = 'https://api.mercadolibre.com/'


export const getDataMLA = async (categorias)=> {
  const response = await fetch(`${url}sites/MLA/search?q=${categorias}`)
  const data = await response.json()
  
  
  return data.results
}

export const getItemMLA = async (idItem)=> {
  const response = await fetch(`${url}items/${idItem}`)
  const data = await response.json()
  
  
  return data
}
//https://api.mercadolibre.com/items/MLA849995029
//#endregion


export const getFirebaseCollection = async (coleccion) => {
  const DB = getFirestore()
  const COLLECTION = DB.collection(coleccion)
  const RESPONSE = await COLLECTION.get()

  const RESULT = RESPONSE.docs.map( element => element.data())
  console.log("Response",RESULT)
  return RESULT


}