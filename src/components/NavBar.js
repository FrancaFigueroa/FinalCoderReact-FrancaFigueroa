import CartWidget from "./CartWidget";
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (

        <div className="navbar">

            <div className="title">Franca Figueroa</div>
            <div className="navbar-links">
                <nav>
                    <ul>
                        <li>
                            <NavLink to='/'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/categoria/interior'>Interior</NavLink>
                        </li>
                        <li>
                            <NavLink to='/categoria/exterior'>Exterior</NavLink>
                        </li>
                        <li>
                            <NavLink to='/carrito'><CartWidget /></NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>

    );
}
export default NavBar;