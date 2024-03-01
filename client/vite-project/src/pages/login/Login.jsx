import {  useContext, useState } from 'react';
import "../login/login.scss"
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
// import { AuthContext } from "../../context/AuthContext.jsx"
import { AuthContext } from "../../context/AuthContext"

const Login = () => {

    // const { login } = useContext(AuthContext);
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
    });

    const [err, setErr] = useState(null)

    // const { login } = useContext(AuthContext);
    const { login } = useContext(AuthContext)


    const Navigate = useNavigate()

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    };

    

    // const handleLogin = async (e) => {
    //     e.preventDefault();
    //     try {
    //         await axios.post("http://localhost:8800/api/auth/login", inputs)
    //         Navigate("/home")
    //     } catch (err) {
    //         console.log(err.response.data)
    //         setErr(err.response.data);
    //     }
    // };


    const handleLogin = async (e) => {
        e.preventDefault()
        try{
            await login(inputs);
            Navigate('/home')
        }catch(err){
            setErr(err.response.data)
        }
    };

    return (
        <>
            <div className='login'>

                <div className="card">
                    <div className="left">
                        <h1>Welcome </h1>
                        <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, consequuntur omnis. Iusto quod, beatae quas odio nobis corporis cumque vero, ipsum iure culpa illum ad sed sint, minima esse dolor.</p>
                        <span>Don't you have an account?</span>
                        <Link to="/register">
                            <button>register</button>
                        </Link>
                    </div>
                    <div className="right">
                        <h1>Login</h1>

                        <form onSubmit={handleLogin}>
                            <input type="text" placeholder='email' name='email' onChange={handleChange} />
                            <input type="password" placeholder='password' name='password' onChange={handleChange} />
                            {err && err}
                            <button >Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;
