import { Link } from "react-router-dom";

export default function Navbar(){
    return (
        <div className="center w-1/3 mx-auto grid grid-cols-3 text-center bg-white border-x border-b border-black border-l mb-12">
            <Link to='/'>Home</Link>
            <Link to="/catalogue">Catalogue</Link>
            <Link to="/aboutus">About us</Link>
        </div>
    );
}