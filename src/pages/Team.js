import React from 'react'
import './css/Team.css'
// sabki photos import kar rha huin
import Jai from '../static/jai.jpg'
import Gaurika from '../static/gaurika.jpg'
import Manan from '../static/manan.jpg'
import Sidebar from '../components/Sidebar/Sidebar'
const Team = () => {
    return (
        <>
            <Sidebar/>
            <div className="team">
                <h1>Care Tail was created by a team of two Developers and one Designer !</h1>
                <div className="flexpeople">
                    <div className="bande">
                        <img src={Manan} alt="manan bhaiya op" />
                        <h2>Manan</h2>
                        <p>Developer</p>
                    </div>
                    <div className="bande">
                        <img src={Jai} alt="jai bhai op" />
                        <h2>Jai Nanda</h2>
                        <p>Developer</p>
                    </div>
                </div>
                    <div className="gaurika">
                        <img src={Gaurika} alt="gaurika didi op" />
                        <h2>Gaurika Agarwal</h2>
                        <p>Designer</p>
                    </div>
            </div>
        </>
    )
}

export default Team
