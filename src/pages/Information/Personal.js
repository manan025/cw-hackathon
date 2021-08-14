import React from 'react'
import '../css/Personal.css'
import Personal1 from '../../static/personal1.png'
import Personal2 from '../../static/personal2.png'
import Personal3 from '../../static/personal3.png'
import Personal4 from '../../static/personal4.png'
import Sidebar from '../../components/Sidebar/Sidebar'
const Personal = () => {
    return (
        <>
            <Sidebar/>
            <div className="infos">
                <h1>Personal Information</h1>
                <p>Tell us about your Fury one !</p>
                <div className="info">
                    <form action="#">
                        <input type="text" placeholder="Name" />
                        <input type="text" placeholder="Age" />
                        <div className="icons">
                            <div className="icon1">
                            <img src={Personal1} alt="" />
                            </div>
                            <div className="icon1">
                            <img src={Personal2} alt="" />
                            </div>
                            <div className="icon1">
                            <img src={Personal3} alt="" />
                            </div>
                            <div className="icon1">
                            <img src={Personal4} alt="" />
                            </div>
                        </div>
                        <input type="text" placeholder="breed" />
                        <input type="text" placeholder="Tag Id / Address" />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Personal
