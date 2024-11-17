import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [navOpen, setNavOpen] = useState(false);

    const openNav = () => {
        setNavOpen(true);
    };

    const closeNav = () => {
        setNavOpen(false);
    };

    return (
        <div>
            <div className="hero_area">
                {/* Header Section */}
                <header className="header_section">
                    <div className="container-fluid">
                        <nav className="navbar navbar-expand-lg custom_nav-container">
                            <Link className="navbar-brand" to="/">
                                <span>Rent4u</span>
                            </Link>
                            <div className="navbar-collapse" id="navbarNav">
                                <div className="user_option">
                                    <Link to="/login">Login</Link>
                                </div>
                                <div className="custom_menu-btn">
                                    <button onClick={openNav}>
                                        <span className="s-1"></span>
                                        <span className="s-2"></span>
                                        <span className="s-3"></span>
                                    </button>
                                </div>
                                {/* Overlay Menu */}
                                <div id="myNav" className={`overlay ${navOpen ? 'open' : ''}`}>
                                    <div className="overlay-content">
                                        <Link to="/" onClick={closeNav}>Home</Link>
                                        <Link to="/about" onClick={closeNav}>About</Link>
                                        <Link to="/cars" onClick={closeNav}>Cars</Link>
                                        <Link to="/blog" onClick={closeNav}>Blog</Link>
                                        <Link to="/contact" onClick={closeNav}>Contact Us</Link>
                                        <Link to="/login" onClick={closeNav}>Login</Link>
                                    </div>
                                    <span className="closebtn" onClick={closeNav}>&times;</span>
                                </div>
                            </div>
                        </nav>
                    </div>
                </header>
            </div>
        </div>
    );
};

export default Header;
