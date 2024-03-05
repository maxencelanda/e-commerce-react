import ProductCard from "./ProductCard";
import reactSVG from '../assets/react.svg'

import getProducts from "../API";
import { useState } from "react";

export default function Catalogue(){

    const [productArray, setProductArray] = useState([])
    const [searchInput, setSearchInput] = useState("")

    getProducts().then((element) => {
        let product = []
        element.data.map((data, idx) => {
            product.push(<ProductCard key={idx} image={data.image} title={data.title} category={data.category} price={data.price} description={data.description} stars={data.rating.rate} count={data.rating.count}/>)
        })
        setProductArray(product)
    })

    return (
        <div className="grid grid-cols-3">
            <div className="mx-auto border-r w-10/12">
                <div>
                    <label for="searchbox" className="font-bold mx-5">Search</label>
                    <input name="searchbox" type="" className="border border-1 rounded-md pl-1"></input>
                </div>
                <div className="mt-10">
                    <p className="font-bold text-center">Category</p>
                </div>
            </div>
            <div className="col-span-2 grid grid-cols-3">
                {productArray.map((product) =>
                    product
                )}
            </div>
        </div>
    );
}