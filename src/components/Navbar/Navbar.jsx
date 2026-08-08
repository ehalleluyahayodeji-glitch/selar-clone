import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <>
            <nav>
                <div className="logo">
                <Link to="/"><img src="/imgi_1_selar-white-logo.png" alt="Selar Logo" /></Link>
                </div>
                <input type="checkbox" id="nav-toggle" className="nav-toggle" />
                <label htmlFor="nav-toggle" className="hamburger" aria-label="Open menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
                <div className="nav-menu">
                    <div className="head">
                        <Link to="/how-it-works">How it Works</Link>
                        <Link to="/pricing">Pricing</Link>
                        <a href="#">Learn <i className="fa-solid fa-chevron-down"></i></a>
                        <a href="#">Affiliate Network</a>
                        <div className="details">
                            <i className="fa-solid fa-globe"></i>
                            <span>EN</span>
                            <i className="fa-solid fa-chevron-down"></i>
                        </div>
                    </div>
                    <div className="login">
                        <Link to="/login">Login</Link>
                        <Link to="/register"><button>Start Selling</button></Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar