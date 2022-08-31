import CartWidget from "./CartWidget";

const NavBar = () => {
    return (

    <div className="navbar">

        <div className="title">Franca Figueroa</div>
        <div className="navbar-links">
        <nav>
            <ul>
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#">Productos</a>
            </li>
            <li>
                <a href="#">Nosotros</a>
            </li>
            <li>
            <a href="#"><CartWidget/></a>
            </li>
        </ul>
        </nav>
        </div>
    </div>
    
    );
}
export default NavBar;