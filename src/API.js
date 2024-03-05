import axios from "axios"

const getProducts = async () => {
    const axiosGet = await axios.get("https://fakestoreapi.com/products")
    return axiosGet
}

export default getProducts