import React, {useState} from 'react'
import './Navbar.css'
import Logo from '../static/logo.png'
import { Link } from 'react-router-dom'
import {useAuth} from "../contexts/AuthContext";
import {useHistory} from "react-router-dom";

// import Logo from '../static/logo.PNG'

const Navbar = () => {

    const {currentUser, logout} = useAuth()
    const [loggedIn, setLoggedIn] = useState(false)
    const history = useHistory()

    function check() {
        let location = window.location.pathname
        if (location !== "/signin" && location !== "/login") {
            setLoggedIn(true)
        } else {
            setLoggedIn(false)
        }
    }

    async function handleLogout() {
        try {
            await logout()
            history.push("/login")
        } catch {
            alert("Could not signout.")
        }
    }

    return (
        <>
            <nav>
                <div className="kya"><Link to="/"><img src={Logo} alt="logo" className="logo"/></Link></div>
                <div className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/features">Features</Link></li>
                    <li><Link to="/team">Team</Link></li>
                    <li>{loggedIn ? <button className="btn-signin nav-btn" onClick={handleLogout}>Log out</button> : <Link to="/signin"><button className="btn-signin">Sign Up</button></Link>}</li>
                    {/*<Link to="/signin"><button className="btn-signin">Sign Up</button></Link>*/}
                </div>
            </nav>
        </>
    )
}

export default Navbar
