import ProductCard from "./ProductCard";

import getProducts from "../API";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Catalogue(){

    const [productArray, setProductArray] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [searchInput, setSearchInput] = useState("")
    //const [selectedCategories, setSelectedCategories] = useState([])

    getProducts().then((element) => {
        let product = []
        let categs = []
        element.data.map((data, idx) => {
            product.push(<ProductCard key={idx} d={data}/>)
            if (!(categs.includes(data.category))){
                categs.push(data.category)
            }
        })
        setProductArray(product)
        setCategories(categs)
    })

    const searchProducts = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== "") {
            setFilteredProducts(productArray.filter((item) =>item.props.d.title.substr(0, searchInput.length).toLowerCase() == searchInput))
            console.log(filteredProducts)
        }
    }

    return (
        <div className="grid grid-cols-3">
            <div className="mx-auto border-r w-10/12">
                <div>
                    <label htmlFor="searchbox" className="font-bold mx-5">Search</label>
                    <input name="searchbox" type="" className="border border-1 rounded-md pl-1" onChange={e => searchProducts(e.target.value)}></input>
                </div>
                <div className="my-10">
                    <p className="font-bold text-center mb-5">Category</p>
                    {categories.map((category, idx) => 
                        <div key={idx}>
                            <input type="checkbox" name={"check"+idx} className="mx-2" checked></input>
                            <label htmlFor={"check"+idx}>{category}</label>
                        </div>
                    )}
                </div>
            </div>
            <div className="col-span-2 grid grid-cols-3 mx-5">
                { 
                searchInput === '' ? productArray.map((product, idx) =>
                    <Link key={idx} to={`/catalogue/${idx}`}>{product}</Link>
                )
                :
                filteredProducts.map((product, idx) =>
                    <Link key={idx} to={`/catalogue/${idx}`}>{product}</Link>
                )
                }
            </div>
        </div>
    );
}