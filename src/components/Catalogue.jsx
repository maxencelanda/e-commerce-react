export default function Catalogue(){

    const response = fetch('https://fakestoreapi.com/products').then(res => res.json());

    //const dataResponse = data.then(res => res);
    //console.log(dataResponse);

    return (
        <div>
            <h1>Catalogue</h1>
            {response.then(data => {
                data.map(e => {
                    <p>{e.title}</p>
                })
            })}
        </div>
    );
}