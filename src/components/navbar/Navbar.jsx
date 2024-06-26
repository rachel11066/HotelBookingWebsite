import "./navbar.css"
import Lotus from "../img/Lotus.png"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navContainer">
            <div className="navLogo">
            <img src={Lotus} alt="LotusLogo" className="logoImg" />
            <span className="logo">Lotus Hotel</span>
            </div>
            <div className="navItems">
                <button className="navButton">Register</button>
                <button className="navButton">Login</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar