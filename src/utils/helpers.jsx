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