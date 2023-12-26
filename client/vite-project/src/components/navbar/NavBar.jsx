import { useContext } from 'react'
import '../navbar/navbar.scss'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faBell, faUser, faLightbulb } from '@fortawesome/free-regular-svg-icons'
import { faGrip, faHouse, faInbox, faMoon, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { DarkModeContext } from '../../context/darkModeContext';



const NavBar = () => {

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
            <FontAwesomeIcon icon={faInbox} />
            <FontAwesomeIcon icon={faBell} /> 
            <div className="user">
                <img src="https://images.pexels.com/photos/15378249/pexels-photo-15378249/free-photo-of-photo-of-a-girl-in-a-car-window.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <span>Nadia العربية مؤشرًا</span>
            </div>
            </div>
        </div>

    )
}

export default NavBar;
