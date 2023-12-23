import { useContext } from 'react'
import '../navbar/navbar.scss'
import { Link } from 'react-router-dom';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import HomeOutlined from '@mui/icons-material/HomeOutlined';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faBell, faUser } from '@fortawesome/free-regular-svg-icons'
import { faGrip, faHouse, faInbox, faMoon, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'



const NavBar = () => {
    return (
        <div className="navBar">
            <div className="left">
                <Link to='/home' style={{ textDecoration: "none" }}>
                    <span> Lama Social</span>
                </Link>
                <FontAwesomeIcon icon={faHouse} />
                <FontAwesomeIcon icon={faMoon} />
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
