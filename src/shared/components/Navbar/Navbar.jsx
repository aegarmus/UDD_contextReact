import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../../modules/auth/context/authContext"


export const Navbar = () => {
    const { user, logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout();
    }

    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <h1>Film App</h1>
            </div>
            <ul className="navbar__links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/products">Products</Link></li>
            </ul>
            <div>
                {
                    !user ? (
                        <Link to="/login">Login</Link>
                    ) : (
                        <div className="navbar-user-info">
                            <span>{user.nombre} {user.apellido}</span>
                            <Link to={'/'} onClick={ handleLogout} >Logout</Link>
                        </div>
                    )
                }
            </div>
        </nav>

    )
}