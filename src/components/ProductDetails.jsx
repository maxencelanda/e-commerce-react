import { useParams } from "react-router-dom"
import getProducts from "../API"
import { useState } from "react"

export default function ProductDetails() {

  const productId = useParams().productId

  const [data, setData] = useState([])
  
  getProducts().then((element) => {
    setData(element.data[productId])
  })
  

  return (
    <div>
      
    </div>
  )
}
