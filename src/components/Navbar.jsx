import { Link } from "react-router-dom";

export default function Navbar(){
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to="/catalogue">Catalogue</Link>
            <Link to="/aboutus">About us</Link>
        </div>
    );
}