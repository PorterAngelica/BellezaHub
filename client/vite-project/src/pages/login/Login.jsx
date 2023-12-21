import React from 'react'
import "../login/login.scss"
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <>
        <div className='login'>

        <div className="card">
            <div className="left">
                <h1>Welcome </h1>
                <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, consequuntur omnis. Iusto quod, beatae quas odio nobis corporis cumque vero, ipsum iure culpa illum ad sed sint, minima esse dolor.</p>
                <span>Don't you have an account?</span>
                <Link to="/">
                <button>register</button>
                </Link>
            </div>
            <div className="right">
            <h1>Login</h1>

            <form action="">
                <input type="text" placeholder='Username' />
                <input type="password" placeholder='password'/>
                <button>Login</button>
            </form>
            </div>
        </div>
    </div>
        </>
    )
}

export default Login;
