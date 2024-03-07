import '../Post/post.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faShare, faEllipsis, faHeartCircleBolt} from '@fortawesome/free-solid-svg-icons'
import {  faHeart, faComment } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'
import Comments  from "../comments/comments"
import { useContext, useState } from 'react'
import moment from "moment/moment.js";
import { makeRequest } from '../../axios'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { AuthContext } from '../../context/AuthContext'


function Post({ postItem}) {

    const [openPostId, setOpenPostId] = useState(null)
    const {currentUser} = useContext(AuthContext)

    const handleOpenCommentSection = (postId) => {
        setOpenPostId((prevPostId) => (postId === prevPostId ? null : postId));
    };

    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: (liked) => {
            const requestData = {
                UserId: currentUser.id,
                postId: postItem.id
            };
            if(liked){
                return makeRequest.delete("/likes", {data: requestData});
            }else{
                return makeRequest.post("/likes", requestData);
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries(["likes"]);
        },
        onError: (error) => {
            {error.message}
            console.log(error)
        }
    })

    const handleLike = () => {
        const isLiked = data && data.includes(currentUser.id);
        mutation.mutate(!isLiked); // Toggle like state
    }
    console.log("currentUser.id")
    console.log(currentUser.id)

    const { isLoading, error, data } = useQuery({
        queryKey: ["likes", postItem.id],
        queryFn: () => makeRequest.get(`/likes?postId=${postItem.id}`).then((response) => {
            return response.data
        })
    })
    console.log("likes data")
    console.log(data)

    if (isLoading){
        return <div> Loading ...</div>;
    }

    if(error){
        console.log(error)
        return <div> Error; {error.message} </div>;
    }


    return (
        <div className='post'> 
        <div className="container">
        <div className="user">
            <div className="userInfo">
            <img src={postItem.profilePic} alt="" />
            <div className="details">
                <Link to={`/profile/${postItem.UserId}`} style={{textDecoration:"none", color:"inherit"}}>
                    <span className='name'>{postItem.name}</span>
                </Link>
                    <span className='date'> {moment(postItem.created_at).fromNow()} </span>
            </div>
            </div>
        <FontAwesomeIcon icon={faEllipsis} />
        </div>
        <div className="content">
            <p value={null}>{postItem.description}</p>
            <img src={"/uploads/" + postItem.image} alt="" />
            
        </div>
        <div className="info">
            <div className="item">

                {data && data.includes(currentUser.id) ? (
                <FontAwesomeIcon icon={faHeartCircleBolt} style={{color:"red"}} onClick={handleLike} /> 
                ):( <FontAwesomeIcon icon={faHeart} onClick={handleLike} />
                )}
                {data.length} liked
            </div>
            
            <div className="item" onClick={() => handleOpenCommentSection(postItem.id)}>
            <FontAwesomeIcon icon={faComment} />
                12 comments
            </div> 
            <div className="item"> 
            <FontAwesomeIcon icon={faShare} />
                share
            </div>
        </div>
        
        {openPostId === postItem.id && <Comments postId={postItem.id} />}
        {console.log("postItem.id")}
        {console.log(postItem.id)}
        </div>
        </div>
    )
}

export default Post;
