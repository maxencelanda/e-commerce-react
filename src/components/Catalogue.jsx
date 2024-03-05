import ProductCard from "./ProductCard";
import reactSVG from '../assets/react.svg'

import getProducts from "../API";

export default function Catalogue(){

    const productArray = [];

    getProducts().then((e) => {
        e.data.map((data) => {
            productArray.push(<ProductCard image={data.image} title={data.title} category={data.category} price={data.price} description={data.description} stars={data.rating.rate}/>)
        })
    })

    console.log(productArray)

    return (
        <div className="grid grid-cols-3">
            <div className="font-bold text-center border-r mr-10">Category</div>
            <div className="col-span-2 grid grid-cols-3">
                {productArray.map((product) => product)}
            </div>
        </div>
    );
}