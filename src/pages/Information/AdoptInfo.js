import React from 'react'
import '../css/AdoptInfo.css'
import Sidebar from '../../components/Sidebar/Sidebar'
const AdoptInfo = () => {
    return (
        <>
            <Sidebar/>
            <div className="adoptinfo">
                <h1>Pet Adoption Application Form</h1>
                <div className="contactadopt">
                    <h2>Your Contact Information</h2>
                    <form action="#">
                        <input type="text" placeholder="Name" />
                        <input type="text" placeholder="Surname" />
                        <input type="text" placeholder="Address" />
                        <input type="text" placeholder="Contact Number" />
                        <input type="text" placeholder="E mail Address" />
                        <input type="text" placeholder="Occupation" />
                    </form>
                </div>
                <div className="flexhai">
                    <div className="house">
                        <p>Family and Housing</p>
                        <h3>How many other adults live in this household? (Name,age,occupation)</h3>
                        <h3>How many children (with ages)</h3>
                    </div>
                    <div className="inputss">
                        <input type="text" placeholder="Name , age and Occupation" />
                        <input type="text" placeholder="Name , age"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdoptInfo
