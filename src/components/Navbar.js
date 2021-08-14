import React from 'react'
import './Navbar.css'
import Logo from '../static/logo.png'
import { Link } from 'react-router-dom'
// import Logo from '../static/logo.PNG'
const Navbar = () => {
    return (
        <>
            <nav>
                <div className="kya"><Link to="/"><img src={Logo} alt="logo" className="logo"/></Link></div>
                <div className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/features">Features</Link></li>
                    <li><Link to="/team">Team</Link></li>
                    <Link to="/signin"><button className="btn-signin">Sign In</button></Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar
