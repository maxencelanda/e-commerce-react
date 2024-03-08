import backgroundImg from "../assets/interieur_entrepot.webp"

export default function Home(){
    return (
        <div>
            
            
            <div className="relative">
                <img src={backgroundImg} className="object-fill w-full max-h-96"/>
                <div className="bg-gray-200 w-full h-full opacity-50 absolute top-0 left-0"></div>
                <h1 className="absolute inset-0 top-1/2 text-center text-5xl font-bold">Welcome</h1>
            </div>
            
            {/*
            <div>
                <p>Recommanded products</p>
                <div>
                    
                </div>
            </div>

            <div>
                <p>New products</p>
                <div>
                    
                </div>
            </div>
            */}
            
        </div>
    );
}