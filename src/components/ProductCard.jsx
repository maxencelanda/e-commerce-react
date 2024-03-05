import starFilled from "../assets/etoile_fill.png"
import starHalf from "../assets/etoile_half.png"
import starEmpty from "../assets/etoile_empty.png"

export default function ProductCard({ image, title, price, description, stars }) {

    const starsArray = [];
    for (let i = 0; i < Math.floor(stars); i++){
        starsArray.push(starFilled);
    }
    while (starsArray.length < 5){
        starsArray.push(starEmpty);
    }
    
    const listImg = starsArray.map((s, k) => 
        <img key={k} src={s}/>
    );

    return (
        <div className='border rounded-md bg-white shadow-lg w-1/2 mb-10 px-2 pt-1 pb-2'>
            <img src={image} className='w-full'></img>
            <p className='bold mt-10 font-bold'>{title}</p>
            <p>{price}€</p>
            <p>{description}</p>
            <div className="flex w-1/12">
                {listImg.map((image) => 
                    image
                )}
            </div>
        <p></p>
        </div>
    )
}
