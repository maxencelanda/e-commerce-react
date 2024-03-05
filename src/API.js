import axios from "axios"

const getProducts = () => {
    const axiosGet = axios.get("https://fakestoreapi.com/products").then((response) => {
        return response;
    })
}

export default getProducts