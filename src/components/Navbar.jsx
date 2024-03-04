import { Link } from "react-router-dom";

import cartImg from "../assets/cart.png";
import avatarImg from "../assets/avatar.png";

export default function Navbar(){
    return (
        <nav>
            <div className="center w-1/3 mx-auto grid grid-cols-5 text-center bg-white border-x border-b border-black border-l mb-12">
                <Link to='/'>Home</Link>
                <Link to="/catalogue">Catalogue</Link>
                <Link to="/aboutus">About us</Link>
            </div>
            <div>
                <Link to='/'><img src={cartImg}></img></Link>
                <Link to='/'><img src={avatarImg}></img></Link>
            </div>
        </nav>
    );
}