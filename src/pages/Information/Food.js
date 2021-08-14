import React from 'react'
import '../css/Food.css'
import Sidebar from '../../components/Sidebar/Sidebar'
const Food = () => {
    return (
        <>
            <Sidebar/>
            <div className="food">
                <h1>Food Log</h1>
                <p>Log your pet's food !</p>
                <div className="addicon">
                    <i class="fa fa-plus fa-2x" aria-hidden="true"></i>
                </div>
                <div className="cards">
                    <div className="days">
                    <h2>Monday</h2>
                    <p><span>Breakfast</span> 9 am  - Royal Cannine Kibble</p>
                    <p><span>Lunch</span> 1:30 pm - Royal Cannine Kibble</p>
                        <p><span>Dinner</span> 7 pm - Chiken and Rice</p>
                    </div>
                    <div className="days">
                    <h2>Tuesday</h2>
                    <p><span>Breakfast</span> 9 am Bread and Milk</p>
                    <p><span>Lunch</span> 1:30 pm Royal Cannine Kibble</p>
                        <p><span>Dinner</span> 7 pm Panner and Rice</p>
                    </div>
                    <div className="days">
                    <h2>Wedneday</h2>
                    <p><span>Breakfast</span> 9 am Chicken , eggs and Vitamins</p>
                    <p><span>Lunch</span> 2:15 pm Royal Cannine Kibble</p>
                        <p><span>Dinner</span> 7 pm Royal Wet Dog Food</p>
                        </div>
                </div>
                <div className="cards">
                    <div className="days">
                    <h2>Thursday</h2>
                    <p><span>Breakfast</span> 9 am Bread and Milk</p>
                    <p><span>Lunch</span> 1:30 pm Royal Cannine Kibble</p>
                        <p><span>Dinner</span> 7 pm Panner and Rice</p>
                    </div>
                    <div className="days">
                    <h2>Friday</h2>
                    <p><span>Breakfast</span> 9 am  - Royal Cannine Kibble</p>
                    <p><span>Lunch</span> 1:30 pm - Royal Cannine Kibble</p>
                        <p><span>Dinner</span> 7 pm - Chiken and Rice</p>
                    </div>
                    <div className="days">
                    <h2>Saturday</h2>
                    <p><span>Breakfast</span> 9 am  - Royal Cannine Kibble</p>
                    <p><span>Lunch</span> 1:30 pm - Royal Cannine Kibble</p>
                        <p><span>Dinner</span> 7 pm - Chiken and Rice</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Food
