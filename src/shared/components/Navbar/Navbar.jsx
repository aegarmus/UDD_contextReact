import { Link } from "react-router-dom"


export const Navbar = () => {

    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <h1>Film App</h1>
            </div>
            <ul className="navbar__links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
            <div>
                <Link to="/login">Login</Link>
            </div>
        </nav>

    )
}