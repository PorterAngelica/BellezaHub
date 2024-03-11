import { useContext } from 'react'
import '../navbar/navbar.scss'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faBell, faUser, faLightbulb } from '@fortawesome/free-regular-svg-icons'
import { faGrip, faHouse, faInbox, faMoon, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { DarkModeContext } from '../../context/darkModeContext';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';

const NavBar = () => {
const { logout } = useContext(AuthContext);
const { currentUser } = useContext(AuthContext)

const handleLogout = async () => {
    logout()
}


    const {toggle, darkMode} = useContext(DarkModeContext)
    return (
        <div className="navBar">
            <div className="left">
                <Link to='/home' style={{ textDecoration: "none" }}>
                    <span> Lama Social</span>
                </Link>
                <FontAwesomeIcon icon={faHouse} />
                {/* if dark mode is on, show light icon */}
                { darkMode ? (
                <FontAwesomeIcon icon={faLightbulb} onClick={toggle} /> 
                ): ( //if light mode is on, show the moon icon
                <FontAwesomeIcon icon={faMoon} onClick={toggle} />
                )}
                <FontAwesomeIcon icon={faGrip} />
                <div className="search">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <input type="text" placeholder='search...' />
                </div>
            </div>
            <div className="right">
            <FontAwesomeIcon icon={faUser} />
            {/* <FontAwesomeIcon icon={faInbox} onClick={logout} /> */}

            <button onClick={handleLogout}> logout</button>

            <FontAwesomeIcon icon={faBell} /> 
            <div className="user">
                <img src={"/uploads/" + currentUser.profilePic} alt="" />
                <span>{currentUser.name}</span>
            </div>
            </div>
        </div>

    )
}

export default NavBar;
