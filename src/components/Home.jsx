import backgroundImg from "../assets/interieur_entrepot.webp"

export default function Home(){
    return (
        <div>
            
            <img src={backgroundImg}></img>
            <div></div>
            <h1>Welcome</h1>

            {/* Pour les 2 div potentiellement faire 1 component "banderole" */}
            <div>
                <p>Recommanded products</p>
                <div>
                    {/* 3 grids -> bouton <, produits, bouton > */}
                </div>
            </div>

            <div>
                <p>New products</p>
                <div>
                    {/* 3 grids -> bouton <, produits, bouton > */}
                </div>
            </div>
            
        </div>
    );
}