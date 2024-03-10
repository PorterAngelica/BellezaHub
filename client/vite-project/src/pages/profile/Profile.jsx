import React, {useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faLocationDot, faGlobe, faEllipsis } from '@fortawesome/free-solid-svg-icons'
import "../profile/profile.scss"
import Posts from '../../components/posts/Posts'
import { useLocation } from 'react-router-dom'
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { makeRequest } from '../../axios'
import { AuthContext } from '../../context/AuthContext'

const Profile = () => {
    const { currentUser } = useContext(AuthContext)
    const userId = parseInt(useLocation().pathname.split("/")[3]);

    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: (following) => {
            if(following){
                return makeRequest.delete(`/relationships?userId=${userId}`);
            }else{
                return makeRequest.post("/relationships", {userId});
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries(["relationship"]);
        },
        onError: (error) => {
            {error.message}
            console.log(error.message)
        }
    })
    
    const {data: relationshipData} = useQuery({
        queryKey: ["relationship"],
        queryFn: () => makeRequest.get("/relationships?followedUserId=" + userId).then((response) => {
            return response.data
        })
        });

        const handleFollow = () => {
            mutation.mutate(relationshipData.includes(currentUser.id));
    };


    const { isLoading, error, data} = useQuery({
        queryKey: ["user", userId],
        queryFn: () => makeRequest.get("/users/find/" + userId).then(response => {
            return response.data
        })
        });
        
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className='profile'>
            <div className="images">
                <img src={data.coverPic} className="cover"/>
                <img src={data.ProfilePic} className="profilePic" />
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
                        {userId === currentUser.id ? (
                            <button>update</button>
                        ) : (
                        <button onClick={handleFollow}> 
                        {relationshipData.includes(currentUser.id) ? "Following" : "Follow"}
                        </button>
                        )}
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