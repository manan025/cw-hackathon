import React from 'react'
import './css/About.css'
import Sidebar from '../components/Sidebar/Sidebar'
const About = () => {
    return (
        <>
                <Sidebar/>
            <div className="about">
                <h1>About</h1>
                <p className="para1">At CareTail we believe that every animal deserves a good home and great care On our app animal lovers can even adopt pets to give them a safe and loving space!</p>
                <p className="para2">There is even a community page where fellow pet parents and animal lovers can talk and share their experiences and tricks!</p>
                <p className="para2">The emergency services can be called at the click of a button, so incase of an emergency you can immediately get help!</p>
                <p className="para2">The veterinary information can be shared with your vet at the click of a button</p>
                <p className="para2">And many more amazing features!
This website will make you life not only easier but also way more organised!</p>
            </div>
        </>
    )
}

export default About
