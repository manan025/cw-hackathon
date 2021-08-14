import React from 'react'
import './css/Features.css'
import Feature1 from '../static/feature1.png'
import Feature2 from '../static/feature2.png'
import Feature3 from '../static/feature3.png'
import Feature4 from '../static/feature4.png'
import Feature5 from '../static/feature5.png'
import Sidebar from '../components/Sidebar/Sidebar'
const Features = () => {
    return (
        <>
            <Sidebar/>
            <div className="features">
                <h1>Features of our Web App</h1>
                <div className="feature1">
                    <div className="first">
                    <img src={Feature1} alt="featueesssss" />
                        <p>Veterinary Information as</p>
                        <p>well as Contact Emergency</p>
                        <p>Services at the click of a</p>
                        <p>button</p>
                    </div>
                     <div className="first">
                    <img src={Feature2} alt="featueesssss" />
                        <p>Location Tracker</p>
                        <p>Tracks your pet's Tag</p>
                    </div>
                     <div className="first">
                        <img src={Feature3} alt="featueesssss" />
                        <p>Pet Adoption</p>
                    </div>
                </div>
                <div className="feature1">
                    <div className="first">
                    <img src={Feature4} alt="featueesssss" />
                   <p>Community</p>
                        <p>Page</p>
                    </div>
                     <div className="first">
                    <img src={Feature5} alt="featueesssss" />
                    <p>Pet Food Log</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Features
