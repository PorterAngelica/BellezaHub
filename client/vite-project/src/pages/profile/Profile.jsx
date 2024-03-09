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
    const userId = useLocation().pathname.split("/")[3]
    console.log("userId locationS")
    console.log(userId)

    const { isLoading, error, data} = useQuery({
        queryKey: ["user", userId],
        queryFn: () => makeRequest.get("/users/find/" + userId).then(response => {
            return response.data
        })

        });

        console.log("profile data")
        console.log(data)
        
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }



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
                        <span>{data.name}  </span>
                        <div className="info">
                            <div className="item">
                                <FontAwesomeIcon icon={faLocationDot} />
                                <span> {data.city}  </span>
                            </div>
                            <div className="item">
                                <FontAwesomeIcon icon={faGlobe} />
                                <span>{data.nationality} </span>
                            </div>
                        </div>
                        <button>Follow</button>
                    </div>
                    <div className="right">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <FontAwesomeIcon icon={faEllipsis} />
                    </div>
                </div>
                <Posts userId={userId} />
            </div>
        </div>
    )
}

export default Profile;