import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {  faInstagram } from '@fortawesome/free-regular-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
// import { faTwitter, faPinterest } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot, faGlobe, faEllipsis } from '@fortawesome/free-solid-svg-icons'
import "../profile/profile.scss"
import Posts from '../../components/posts/Posts'
import { useLocation } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { makeRequest } from '../../axios'

const Profile = () => {
    const userId = useLocation().pathname.split("/")[2]

    const { isLoading, error, data} = useQuery({
        queryKey: ["user"],
        queryFn: () => makeRequest.get("/users/find/3").then(response => {
            return response.data
        })

        });

        console.log("profile data")
        console.log(data)



    return (
        <div className='profile'>
            <div className="images">
                <img src="https://images.pexels.com/photos/19380634/pexels-photo-19380634/free-photo-of-tabby-cat-yawning.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="cover" />
                <img src="https://images.pexels.com/photos/18866331/pexels-photo-18866331/free-photo-of-model-in-black-top-and-jacket.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="profilePic" />
            </div>
            <div className="profileContainer">
                <div className="uInfo">
                    <div className="left">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <FontAwesomeIcon icon={faGlobe} />
                        <FontAwesomeIcon icon={faEnvelope} />
                        <FontAwesomeIcon icon={faEllipsis} />
                    </div>
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
                        </div>
                        <button>Follow</button>
                    </div>
                    <div className="right">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <FontAwesomeIcon icon={faEllipsis} />
                    </div>
                </div>
                <Posts />
            </div>
        </div>
    )
}

export default Profile;