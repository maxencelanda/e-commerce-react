import { Link } from "react-router-dom";

export default function Footer(){
    return (
        <div className="bg-black text-white text-center grid grid-cols-2 fixed bottom-0 left-0 right-0">
            <Link>Conditions of Use</Link>
            <Link>Privacy Notice</Link>
        </div>
    );
}