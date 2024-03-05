import { Link } from "react-router-dom";

import cartImg from "../assets/cart.png";
import avatarImg from "../assets/avatar.png";

export default function Navbar(){
    return (
        <nav className="grid grid-cols-3">
            <div className="col-start-2 center mx-auto grid grid-cols-3 w-full text-center bg-white border-x border-b border-black border-l mb-12">
                <Link to='/'>Home</Link>
                <Link to="/catalogue">Catalogue</Link>
                <Link to="/aboutus">About us</Link>
            </div>
            <div className="flex flex-row-reverse">
                <Link to='/'><img src={cartImg} className="w-3/5"></img></Link>
                <Link to='/'><img src={avatarImg} className="w-1/2"></img></Link>
            </div>
        </nav>
    );
}