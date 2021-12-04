import axios from "axios";

const apiUrl = 'https://api.mercadolibre.com/sites/MCO/'

export  const getProductsByName =  async (name) =>{
    const response = await axios.get(`${apiUrl}search?q=${name}#json`)
    return response
}