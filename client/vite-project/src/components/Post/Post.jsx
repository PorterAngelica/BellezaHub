import '../Post/post.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faShare, faEllipsis, faHeartCircleBolt} from '@fortawesome/free-solid-svg-icons'
import {  faHeart, faComment } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'

function Post({post}) {

    //TEMPORARY
    const liked = false;
    return (
        <div className='post'> 
        <div className="container">
        <div className="user">
            <div className="userInfo">
            <img src={post.profilePic} alt="" />
            <div className="details">
                <Link to={`/profile/${post.UserId}`} style={{textDecoration:"none", color:"inherit"}}>
                    <span className='name'>{post.name}</span>
                </Link>
                    <span className='date'> 1 min ago</span>
            </div>
            </div>
        <FontAwesomeIcon icon={faEllipsis} />
        </div>
        <div className="content">
            <p>{post.desc}</p>
            <img src={post.img} alt="" />
        </div>
        <div className="info">
            <div className="item">
                {liked ? <FontAwesomeIcon icon={faHeartCircleBolt} /> : <FontAwesomeIcon icon={faHeart} />}
                12 liked
            </div>
            <div className="item">
            <FontAwesomeIcon icon={faComment} />
                12 comments
            </div>
            <div className="item">
            <FontAwesomeIcon icon={faShare} />
                share
            </div>
        </div>
        </div>
        </div>
    )
}

export default Post
