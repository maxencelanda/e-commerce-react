import starFilled from "../assets/etoile_fill.png"
import starHalf from "../assets/etoile_half.png"
import starEmpty from "../assets/etoile_empty.png"

export default function ProductCard({ image, title, category, price, description, stars, count }) {

    /* STARS */
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

    /* Title length */
    if (title.length > 63){
        title = title.substring(0, 60) + "..."
    }

    return (
        <div className='border rounded-md bg-white shadow-lg overflow-hidden w-3/4 mb-10 px-2 pt-1 pb-2'>
            <img src={image} className='w-full min-h-64 max-h-80'></img>
            <p className='bold mt-10 font-bold'>{title}</p>
            <p>{price}€</p>
            <div className="flex w-1/12">
                {listImg.map((image) => 
                    image
                )}
                <p className="ml-2">({count})</p>
            </div>
        <p></p>
        </div>
    )
}
