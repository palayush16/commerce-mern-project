import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
    return (
        <div className="container-navbar">
            <div className="heading">
                <div className="nav-heading">
                    <h1>Dalali OP</h1></div>
                <div className="nav-links">
                    <Link to="/about"><button>About Us</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
