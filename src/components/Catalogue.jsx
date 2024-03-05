import ProductCard from "./ProductCard";
import reactSVG from '../assets/react.svg'

import API from "../API";

export default function Catalogue(){

    //const response = fetch('https://fakestoreapi.com/products').then(res => res.json());

    //const dataResponse = data.then(res => res);
    //console.log(dataResponse);

    console.log(API.getProducts())

    return (
        <div className="grid grid-cols-3">
            <div className="font-bold text-center border-r mr-10">Category</div>
            <div className="col-span-2 grid grid-cols-3">
                {/*response.then(data => {
                    data.map(e => {
                        <p>{e.title}</p>
                    })
                })*/}
                <ProductCard image={reactSVG} title={"Test"} price={10} description={"desc"} stars={3}/>
                <ProductCard image={reactSVG} title={"Test"} price={10} description={"desc"} stars={3}/>
                <ProductCard image={reactSVG} title={"Test"} price={10} description={"desc"} stars={3}/>
                <ProductCard image={reactSVG} title={"Test"} price={10} description={"desc"} stars={3}/>
                <ProductCard image={reactSVG} title={"Test"} price={10} description={"desc"} stars={3}/>
                <ProductCard image={reactSVG} title={"Test"} price={10} description={"desc"} stars={3}/>
            </div>
        </div>
    );
}