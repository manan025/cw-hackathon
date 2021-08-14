import React, {useRef, useState} from 'react'
import './css/SignIn.css'
import Profile from '../static/avatar.png'
import { Link, useHistory } from 'react-router-dom'
import AuthProvider, {useAuth} from "../contexts/AuthContext"
import {Alert} from "react-bootstrap"
import Sidebar from '../components/Sidebar/Sidebar'
const SignIn = () => {

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfRef = useRef()
    const {signup, currentUser} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    // TODO: Profile pic input

    async function handleSubmit(e) {
        e.preventDefault()
        if (passwordRef.current.value !== passwordConfRef.current.value) {
            return setError("Please re enter the password.")
        }
        try {
            setError("")
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push("/")
        } catch {
            setError("Failed to sign up.")
        }
        setLoading(false)
    }

    return (
        <>
            <Sidebar/>
            <div className="signin">
                {/*{JSON.stringify(currentUser)}*/}
                {/*{currentUser.email}*/}
                <h1>Sign In</h1>
                <p className="signDesc">Become a Part of the Care Tail Family Now !</p>
                <img src={Profile} alt="bekar hai" />
                <Link to="/" className="add">Add Profile Picture</Link>
                {error && <Alert variant="danger">{error}</Alert>}
                <div className="form">
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Enter your email or phone number" ref={emailRef}/>
                        <input type="password" placeholder="Password" ref={passwordRef}/>
                        <input type="password" placeholder="Confirm Password" ref={passwordConfRef}/>
                        <button type="submit" disabled={loading}>Sign In</button>
                    </form>
                </div>
                <p className="gadhe">Aleardy have an account ? <Link to="/login">Login</Link></p>
            </div>
        </>
    )
}

export default SignIn
