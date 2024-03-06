import '../Post/post.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faShare, faEllipsis, faHeartCircleBolt} from '@fortawesome/free-solid-svg-icons'
import {  faHeart, faComment } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'
import Comments  from "../comments/comments"
import { useState } from 'react'
import moment from "moment/moment.js";


function Post({ postItem, post }) {

    const [commentOpen, setCommentOpen] = useState(false)
    // const [post, setPost] = useState([])

    //TEMPORARY
    const liked = false;
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
                {liked ? <FontAwesomeIcon icon={faHeartCircleBolt} /> : <FontAwesomeIcon icon={faHeart} />}
                12 liked
            </div>
            <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
            <FontAwesomeIcon icon={faComment} />
                12 comments
            </div>
            <div className="item">
            <FontAwesomeIcon icon={faShare} />
                share
            </div>
        </div>
        { commentOpen && <Comments postId={postItem.id} />}
        
        </div>
        </div>
    )
}

export default Post;
