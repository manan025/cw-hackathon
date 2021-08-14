import React from 'react'
import '../css/Venn.css'
import Sidebar from '../../components/Sidebar/Sidebar'
const Venn = () => {
    return (
        <>
            <Sidebar/>
            <div className="ven">
                <h1>Veterinary Information</h1>
                <p>Tell us about your pet's health !</p>
                <div className="vibing">
                    <form action="#">
                        <input type="text" placeholder="Vaccination Detail"/>
                        <input type="text" placeholder="Vaccination Batch No."/>
                        <input type="text" placeholder="Date of Next Vaccination"/>
                        <input type="text" placeholder="Rabies waiver / Certificate"/>
                        <input type="text" placeholder="Allergies"/>
                        <input type="text" placeholder="Medications"/>
                        <input type="text" placeholder="Weight"/>
                        <input type="text" placeholder="Age"/>
                        <input type="text" placeholder="Next Vet Appointment Date" />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Venn
