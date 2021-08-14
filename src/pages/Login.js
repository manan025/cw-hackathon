import React, {useRef, useState} from 'react'
import './css/Login.css'
import Photo from '../static/robert.jpg'
import { Link, useHistory } from 'react-router-dom'
import {useAuth} from "../contexts/AuthContext";
import { Alert } from "react-bootstrap";
import Sidebar from '../components/Sidebar/Sidebar'
const Login = () => {

    const emailRef = useRef()
    const passwordRef = useRef()
    const {login, currentUser} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/")
        } catch {
            setError("Failed to login.")
        }
        setLoading(false)
    }

    return (
        <>
            <Sidebar/>
            <form onSubmit={handleSubmit}>
                <div className="login">
                        <h1>Log In</h1>
                        <p>Welcome Back ! Log in to access your account</p>
                        <img src={Photo} alt="" />
                        {error && <Alert variant="danger">{error}</Alert> }
                        <input type="text" placeholder="Email" ref={emailRef}/>
                        <input type="password" placeholder="Password" ref={passwordRef}/>
                        <button type="submit">Log In</button>
                </div>
            </form>

            <div className="account">
                <h4>Don't have an account? </h4>
                <Link to="/signin" disabled={loading}>Sign Up</Link>
                </div>
        </>
    )
}

export default Login
