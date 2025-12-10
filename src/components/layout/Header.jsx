import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Using Lucide icons
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className="site-header">
            <div className="container">
                <Link to="/" className="logo" onClick={closeMenu}>
                    SABS & CO
                </Link>

                {/* Desktop Nav */}
                <nav className="main-nav desktop-only">
                    <ul>
                        <li><NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink></li>
                        <li><NavLink to="/chartered-accountancy-india" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>CA (India)</NavLink></li>
                        <li><NavLink to="/global-accounting-bookkeeping" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Global Accounting</NavLink></li>
                        <li><NavLink to="/who-we-serve" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Who We Serve</NavLink></li>
                        {/* <li><NavLink to="/insights" className="nav-link">Insights</NavLink></li> */}
                        <li><NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>About</NavLink></li>
                        <li><Link to="/contact" className="btn-primary">Book a Call</Link></li>
                    </ul>
                </nav>

                {/* Mobile Toggle */}
                <button className="mobile-toggle" onClick={toggleMenu} aria-label="Toggle menu">
                    {isMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Overlay */}
            {isMenuOpen && (
                <div className="mobile-overlay">
                    <div className="mobile-header">
                        <span className="logo">SABS & CO</span>
                        <button className="mobile-toggle" onClick={closeMenu}><X /></button>
                    </div>
                    <ul className="mobile-nav-list">
                        <li><Link to="/" className="mobile-nav-link" onClick={closeMenu}>Home</Link></li>
                        <li><Link to="/chartered-accountancy-india" className="mobile-nav-link" onClick={closeMenu}>CA (India)</Link></li>
                        <li><Link to="/global-accounting-bookkeeping" className="mobile-nav-link" onClick={closeMenu}>Global Accounting</Link></li>
                        <li><Link to="/who-we-serve" className="mobile-nav-link" onClick={closeMenu}>Who We Serve</Link></li>
                        <li><Link to="/about" className="mobile-nav-link" onClick={closeMenu}>About</Link></li>
                        <li><Link to="/contact" className="mobile-nav-link text-accent" onClick={closeMenu}>Book a Call</Link></li>
                    </ul>
                </div>
            )}

            <style>{`
        @media (min-width: 1025px) {
           .mobile-toggle { display: none; }
           .mobile-overlay { display: none; }
           .desktop-only { display: block; }
        }
        @media (max-width: 1024px) {
           .desktop-only { display: none; }
        }
      `}</style>
        </header>
    );
};

export default Header;
