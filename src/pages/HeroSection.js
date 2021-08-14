import React, { useState } from 'react'
import Stories from '../components/Stories'
import './css/HeroSection.css'
import heroImage from '../static/home_img1.png'
import heroImage2 from '../static/home_img2.png'
import {Alert} from 'react-bootstrap'
import {useAuth} from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import Sidebar from '../components/Sidebar/Sidebar'

const HeroSection = () => {

    const [error, setError] = useState("")
    const {currentUser, logout} = useAuth()
    const history = useHistory()

    async function handleLogout() {
        setError("")
        try {
            await logout()
            history.push("/login")
        } catch {
            setError("Failed to log out.")
        }
    }

    return (
        <>
            {error && <Alert variant="danger">{error}</Alert> }
            {/*{currentUser && currentUser.email}*/}
            <Sidebar/>
            <div className="heroflex">
                <div className="textflex">
                    <h1 className="heroheading">Your one stop website for all your pet parent needs !</h1>
                </div>
                <div className="image">
                    <img src={heroImage} alt="main" className="heroImage"/>
                </div>
            </div>
            <div className="heroflex">
                <div className="textflex">
                    <h1 className="heroheading">Keep all your furry friends details at one place for easy access !</h1>
                </div>
                <div className="image">
                    <img src={heroImage2} alt="main" className="heroImage"/>
                </div>
            </div>
            <Stories/>
        </>
    )
}

export default HeroSection
