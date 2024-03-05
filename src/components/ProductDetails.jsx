import { Link, useParams } from "react-router-dom"
import getProducts from "../API"
import { useState } from "react"

export default function ProductDetails() {

  const productId = useParams().productId

  const [data, setData] = useState([])
  
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
        <p className="text-center mt-10"><Link to="/" className="bg-blue-300 p-2 rounded-xl border border-black border-2">Ajouter au panier</Link></p>
      </div>
    </div>
  )
}
