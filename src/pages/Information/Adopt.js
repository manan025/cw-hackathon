import React from 'react'
import '../css/Adopt.css'
import Adopt1 from '../../static/adopt1.png'
import Adopt2 from '../../static/adopt2.png'
import Adopt3 from '../../static/adopt3.png'
import Personal1 from '../../static/personal1.png'
import Personal2 from '../../static/personal2.png'
import Personal3 from '../../static/personal3.png'
import Personal4 from '../../static/personal4.png'
import Sidebar from '../../components/Sidebar/Sidebar'
import { Link } from 'react-router-dom'
const Adopt = () => {
    return (
        <>
            <Sidebar/>
            <div className="adopt">
                <h1>Adopt a Friend</h1>
                <p>Adopt the cutiest platmate !</p>
                <h3 className="promotion">Here at Care Tail we strongly believe in "Adopt don't Shop" that's why we partneered with various pet adoption agencies to make it easier for these lovely animals to find a new, forver home !</h3>
                <div className="flex">

                <span><i class="fa fa-search fa-2x"></i></span><input className="searching" type="text" placeholder="Search" />
                </div>
                <div className="choose">
                    <Link to="/adoptinfo">Get a Pet</Link>
                </div>
                <div className="animals">
                    <div className="sooja">
                    <p>Choose Animal</p>
                    </div>
                    <div className="chooseicons">
                        <div className="icons">
                            <div className="icon1 exc">
                            <img src={Personal1} alt="" />
                            </div>
                            <div className="icon1 exc">
                            <img src={Personal2} alt="" />
                            </div>
                            <div className="icon1 exc">
                            <img src={Personal3} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="kutte">
                    <div className="part1">
                    <img src={Adopt1} alt="kuteeeee" />
                    <p>Coco</p>
                    </div>
                    <div className="part1">
                    <img src={Adopt2} alt="kuteeeee" />
                    <p>Arabia</p>
                    </div>
                    <div className="part1">
                    <img src={Adopt3} alt="kuteeeee" />
                    <p>Oreo</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Adopt
