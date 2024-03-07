import { Link, useParams } from "react-router-dom"
import getProducts from "../API"
import { useContext, useEffect, useState } from 'react'

import { CartContext } from '../context/Cart'

export default function ProductDetails() {

  const productId = useParams().productId
  const [data, setData] = useState([])

  const { cartItems, addToCart } = useContext(CartContext)
  
  getProducts().then((element) => {
    setData(element.data[productId])
  })

  return (
    <div className="grid grid-cols-3">
      <div>
        <img src={data.image} className="mx-auto w-4/5 max-h-fit"></img>
      </div>
      <div>
        <p className="font-bold text-center text-2xl border-b pb-5 w-10/12 mx-auto">{data.title}</p>
        <p className="mt-5 w-10/12 mx-auto">{data.description}</p>
      </div>
      <div className="border border-black w-4/5 mx-auto max-h-64">
        <p className="font-bold text-center text-2xl border-b py-5 w-10/12 mx-auto">{data.price}€</p>
        <p className="text-center"><button onClick={() => addToCart(data)} className="text-center mt-10 bg-black text-white font-bold p-2 rounded-xl"><Link to="/cart">ADD TO CART</Link></button></p>
      </div>
    </div>
  )
}
