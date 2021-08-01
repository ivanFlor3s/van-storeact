import { getFirestore } from "../firebase/client";
import firebase from "firebase"

//#region API MELI
const url = "https://api.mercadolibre.com/";

export const getDataMLA = async (categorias) => {
  const response = await fetch(`${url}sites/MLA/search?q=${categorias}`);
  const data = await response.json();

  return data.results;
};

export const getItemMLA = async (idItem) => {
  const response = await fetch(`${url}items/${idItem}`);
  const data = await response.json();

  return data;
};
//https://api.mercadolibre.com/items/MLA849995029
//#endregion

export const getFirebaseCollection = async (coleccion) => {
  const DB = getFirestore();
  const COLLECTION = DB.collection(coleccion);
  const RESPONSE = await COLLECTION.get();

  const RESULT = RESPONSE.docs.map((element) => element.data());

  return RESULT;
};

export const generarOrdenFirebase = (order) => {
  const DB = getFirestore();
  return DB.collection("orders").add(order);
};

export const validarOrdenFirebase = async (shoppingList) => {
  const DB = getFirestore();
  const QUERY = await DB.collection("productos")
    .where(firebase.firestore.FieldPath.documentId(), 'in', shoppingList.map( element => element.itemList.id)).get()
  //const PRODSTOACTUALIZAR = QUERY.docs.map(element => element.data());


  const outOfStock = [];

  QUERY.docs.forEach((docSnapshot)=> {
    let prodInCart = findProcucto(shoppingList, docSnapshot.data().id)
    if (docSnapshot.data().stock < prodInCart.itemList.stock){
      outOfStock.push(prodInCart)
    }
  })
  return outOfStock
  
}

const findProcucto = ( shoppingList, idProd) => {
  return shoppingList.find(p => p.itemList.id === idProd )
}


export const actualizarStockFirebase = async (shoppingList) => {
  const DB = getFirestore();
  const QUERY = await DB.collection("productos")
    .where(firebase.firestore.FieldPath.documentId(), 'in', shoppingList.map( element => element.itemList.id)).get()
  const BATCH = DB.batch()

  QUERY.docs.forEach((docSnapshot)=> {
    let prodInCart = findProcucto(shoppingList, docSnapshot.data().id)
    BATCH.update(docSnapshot.ref, {stock: docSnapshot.data().stock - prodInCart.itemList.stock})
  })
  await BATCH.commit();
}

// {
//   observacion: "Una observacion riquisima",
//   rate: 4.5
// }

export const AgregarObservacion = async (idDocumento, opinion) => {
  
  const DB = getFirestore();
  const PRODREF = DB.collection("productos").doc(idDocumento).collection("observaciones").add(opinion )

  return PRODREF;
}

export const GetObservaciones = async (idDoc) =>{
  const DB = getFirestore();
  const OBS = await DB.collection("productos").doc(idDoc).collection("observaciones").get();

  const OBSERVACIONES = OBS.docs.map( element => element.data())
  
  return OBSERVACIONES;
  
}  