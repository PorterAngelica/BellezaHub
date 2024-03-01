// import React from 'react'
import "../register/register.scss"
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const Register = () => {

    const [inputs, setInputs] = useState({
        username:"",
        email:"",
        password:"",
        name:"",
    });

    const [err, setErr] = useState(null)
    const Navigate = useNavigate();
    

    const handleChange = (e) => {
        setInputs((prev) => ({...prev, [e.target.name]: e.target.value }))
    };

    const handleClick = async (e) =>{
        e.preventDefault()

        try{
            await axios.post("http://localhost:8800/api/auth/register", inputs)
            Navigate('/home')

        }catch(err){
            setErr(err.response.data)
        }

    }
        console.log(err)
    return (
        <>
        <div className='register'>
            <div className="card">
            <div className="left">
                <h1>Drift Social </h1>
                <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, consequuntur omnis. Iusto quod, beatae quas odio nobis corporis cumque vero, ipsum iure culpa illum ad sed sint, minima esse dolor.</p>
                <span>Do you have an account?</span>
                <Link to="/login" >
                <button>Login</button>
                </Link>
            </div>
            <div className="right">
            <h1>Register</h1>

            <form onSubmit={handleClick}>
                <input type="text" placeholder='Username' name='username' onChange={handleChange}/>
                <input type="email" placeholder='Email' name='email' onChange={handleChange}/>
                <input type="password" placeholder='password' name='password' onChange={handleChange}/>
                <input type="text" placeholder='Name' name='name' onChange={handleChange}/>
                {err && err}
                <button >Register</button>
            </form>
            </div>
        </div>
    </div>
    </>
    )
}

export default Register;