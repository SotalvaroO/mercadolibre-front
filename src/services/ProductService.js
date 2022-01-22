import axios from "axios";

const apiUrl = 'https://api.mercadolibre.com/sites/MCO/'
const apiUrl2 = 'https://api.mercadolibre.com/items/'

export  const getProductsByName =  async (name) =>{
    const response = await axios.get(`${apiUrl}search?q=${name}#json`)
    console.log(response)
    return response
}

export const getProductDetailById = async (id) =>{
    const response = await axios.get(`${apiUrl2}${id}`)
    return response
}

export const getProductDescription = async (id) =>{
    const response = await axios.get(`${apiUrl2}${id}/description`)
    return response
}