import { Link } from "react-router-dom";
import "./navbar.css"

export const Navbar = () => {

    return (
        <>
        <div className="nav">
            <span className="left">
                <h3 >Job Site</h3>
            </span>
            <div className="navbar">
                <button className="btns btn-secondary" ><Link className="link" to={'/home'}>Home</Link></button>
                <button className="btns btn-secondary"><Link className="link" to={'/dashboard'}>Dashboard</Link></button>
                <button className="btns btn-secondary" ><Link className="link" to={'/login'}>Login</Link></button>
            </div>

        </div>

        </>
    );
};