import axios from 'axios'
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'


const Logout = () => {
    useNavigate = Navigate()

    const logout = () => {
        axios.post("http://localhost:8800/api/auth/logout")
        Navigate("/login")
    }

    return (
        <div>
            <button onClick={logout}> Logout</button>
        </div>
    )
}

export default Logout
