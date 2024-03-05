import { Link } from "react-router-dom";

import cartImg from "../assets/cart.png";
import avatarImg from "../assets/avatar.png";

export default function Navbar(){
    
    return (
        <nav className="grid grid-cols-3 fixed top-0 right-0 left-0 shadow-lg bg-gray-50">
            <div className="col-start-2 text-xl center justify-content space-x-4 flex w-full text-center bg-white border-x border-b border-black mb-4 pt-2 py-auto">
                <Link to='/' className="flex-1">Home</Link>
                <Link to="/catalogue" className="flex-1">Catalogue</Link>
                <Link to="/aboutus" className="flex-1">About us</Link>
            </div>
            <div className="flex flex-row-reverse mr-64 gap-8 pt-2">
                <Link to='/'><img src={cartImg} className="w-4/5"></img></Link>
                <Link to='/'><img src={avatarImg} className="w-2/3"></img></Link>
            </div>
        </nav>
    );
}