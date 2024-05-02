import { Link } from 'react-router-dom';
import logo from "../imgs/logo.png";

const Navbar = () => {
    return(
        <nav className="navbar">
            
            <Link to={"/home"}>
                <img src={logo} className="flex-none w-10" />
            </Link>
            
            
        </nav>
    )
}

export default Navbar;