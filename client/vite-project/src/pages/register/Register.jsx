import React from 'react'
import "../register/register.scss"
import { Link } from 'react-router-dom';

const Register = () => {
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

            <form action="">
                <input type="text" placeholder='Username' />
                <input type="email" placeholder='Email' />
                <input type="password" placeholder='password'/>
                <input type="text" placeholder='Name' />
                <button>Register</button>
            </form>
            </div>
        </div>
    </div>
    </>
    )
}

export default Register;