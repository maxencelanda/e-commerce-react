import { useState } from "react";

export default function Catalogue(){
    let data = []
    const prom = fetch("https://fakestoreapi.com/products").then((res) => res.json()).then((result) => data.push(result))

    console.log(data)

    return (
        <div>
            <h1>Catalogue</h1>
            {data.map(element => {
                <p>{element[0].title}</p>
                console.log(element)
            })}
        </div>
    );
}