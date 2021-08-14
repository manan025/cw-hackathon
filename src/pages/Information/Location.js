import React from 'react'
import '../css/Location.css'
import Location1 from '../../static/location1.png'
import Location2 from '../../static/location2.png'
import Location3 from '../../static/location3.png'
import Sidebar from '../../components/Sidebar/Sidebar'
const Location = () => {
    return (
        <>
            <Sidebar/>
            <div className="location">
                <div className="heading">
                    <h2>Order the Care Tail pet if you still haven't and track you pet's Location at all times !</h2>
                </div>
                <h1>Location Tracker</h1>
                <div className="mainflex">
                    <div className="locationcards">
                        <div className="tag">
                            <div className="ihateyou">
                                <img src={Location1} alt="" />
                            </div>
                            <div className="details">
                            <h5>Henry</h5>
                            <p>Tag ID : 0101042</p>
                            </div>
                        </div>
                         <div className="tag">
                            <div className="ihateyou">
                                <img src={Location2} alt="" />
                            </div>
                            <div className="details">
                            <h5>Charlie</h5>
                            <p>Tag ID : 0101042</p>
                            </div>
                        </div>
                        <div className="tag">
                            <div className="ihateyou">
                                <img src={Location3} alt="" />
                            </div>
                            <div className="details">
                            <h5>Pepper</h5>
                            <p>Tag ID : 0101042</p>
                            </div>
                        </div>
                    </div>
                    <div className="maping">
                        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.0699414474607!2d77.14591431495033!3d28.537617382455352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1c32ad4ee5ef%3A0x6c14b01687ecdf89!2sDelhi%20Public%20School%20Vasant%20Kunj!5e0!3m2!1sen!2sin!4v1628849070287!5m2!1sen!2sin"></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Location
