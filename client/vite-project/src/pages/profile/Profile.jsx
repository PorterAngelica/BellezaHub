import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {  faInstagram } from '@fortawesome/free-regular-svg-icons'
import {  faEnvelope } from '@fortawesome/free-regular-svg-icons'
// import { faTwitter, faPinterest } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot, faGlobe, faEllipsis } from '@fortawesome/free-solid-svg-icons'
import "../profile/profile.scss"

const Profile = () => {
    return (
        <div className='profile'>
            <div className="images">
                <img src="https://images.pexels.com/photos/19380634/pexels-photo-19380634/free-photo-of-tabby-cat-yawning.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="cover" />
                <img src="https://images.pexels.com/photos/18866331/pexels-photo-18866331/free-photo-of-model-in-black-top-and-jacket.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="profilePic" />
            </div>
            <div className="profileContainer">
                <div className="uInfo">

                    <div className="center">
                        <span>Rosarito</span>
                        <div className="info">
                        <div className="item">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>Mexico</span>
                        </div>
                        <div className="item">
                        <FontAwesomeIcon icon={faGlobe} />
                        <span>Spanish</span>
                        </div>
                        <button>Follow</button>
                    </div>
                    <div className="right">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <FontAwesomeIcon icon={faEllipsis} />
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Profile;