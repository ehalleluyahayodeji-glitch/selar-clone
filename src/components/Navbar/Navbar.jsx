import './Navbar.css'

const Navbar = () => {
    return (
        <>
            <nav>
                <div className="logo">
                    <img src="/imgi_1_selar-white-logo.png" alt="Selar Logo" />
                </div>
                <input type="checkbox" id="nav-toggle" className="nav-toggle" />
                <label htmlFor="nav-toggle" className="hamburger" aria-label="Open menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
                <div className="nav-menu">
                    <div className="head">
                        <a href="#">How it Works</a>
                        <a href="#">Pricing</a>
                        <a href="#">Features <i className="fa-solid fa-chevron-down"></i></a>
                        <a href="#">Learn <i className="fa-solid fa-chevron-down"></i></a>
                        <a href="#">Affiliate Network</a>
                        <div className="details">
                            <i className="fa-solid fa-globe"></i>
                            <span>EN</span>
                            <i className="fa-solid fa-chevron-down"></i>
                        </div>
                    </div>
                    <div className="login">
                        <a href="#">Login</a>
                        <button>Start Selling</button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar