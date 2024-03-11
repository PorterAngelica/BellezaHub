import '../Post/post.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShare, faEllipsis, faHeartCircleBolt } from '@fortawesome/free-solid-svg-icons'
import { faHeart, faComment } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'
import Comments from "../comments/comments"
import { useContext, useState } from 'react'
import moment from "moment/moment.js";
import { makeRequest } from '../../axios'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { AuthContext } from '../../context/AuthContext'
import { useLocation } from 'react-router-dom'


function Post({ postItem }) {
    const location = useLocation();
    const isProfilePage = location.pathname.startsWith('/home/profile/'); // Check if the pathname starts with "/home/profile/"


    const [openPostId, setOpenPostId] = useState(null)
    const { currentUser } = useContext(AuthContext)
    const [menuOpen, setMenuOpen] = useState(false)

    const handleOpenCommentSection = (postId) => {
        setOpenPostId((prevPostId) => (postId === prevPostId ? null : postId));
    };

    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: (liked) => {
            const requestData = {
                userId: currentUser.id,
                postId: postItem.id
            };
            if (liked) {
                return makeRequest.delete("/likes", { data: requestData })
            } else {
                return makeRequest.post("/likes", (requestData));
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries(["likes"]);
        },
        onError: (error) => {
            { error.message }
            console.log(error.message)
        }
    })

    const deleteMutation = useMutation({
        mutationFn: (postId) => {
            const requestData = {
                postId: postItem.id
            };
            return makeRequest.delete("/posts/" + postId)
        },
        onSuccess: () => {
            queryClient.invalidateQueries(["posts"]);
        },
        onError: (error) => {
            { error.message }
            console.log(error.message)
        }
    })

    const handleLike = (liked) => {
        mutation.mutate(liked);
        // data.includes(currentUser.id)
    };

    const handleDelete = () => {
        deleteMutation.mutate(postItem.id)
    }

    const { isLoading, error, data } = useQuery({
        queryKey: ["likes", postItem.id],
        queryFn: () => makeRequest.get(`/likes?postId=${postItem.id}`).then((response) => {
            return response.data
        })
    })
    // console.log("likes data")
    // console.log(data)

    if (isLoading) {
        return <div> Loading ...</div>;
    }

    if (error) {
        console.log(error)
        return <div> Error; {error.message} </div>;
    }

    console.log("postItempost")
    console.log(postItem)
    return (
        <div className='post'>
            <div className="container">
                <div className="user">
                    <div className="userInfo">
                        <img
                            src={isProfilePage ? "/uploads/" + postItem.profilePic : "/uploads/" + postItem.users_profilePic}
                            alt="Post Image"
                        />

                        <div className="details">
                            <Link to={`/home/profile/${postItem.users_id}`} style={{ textDecoration: "none", color: "inherit" }}>
                                <span className='name'>{postItem.users_name}{postItem.name}</span>
                            </Link>
                            <span className='date'> {moment(postItem.created_at).fromNow()} </span>
                        </div>
                    </div>
                    <FontAwesomeIcon icon={faEllipsis} onClick={() => setMenuOpen(!menuOpen)} />
                    {menuOpen && postItem.users_id === currentUser.id && (
                        <button onClick={handleDelete}> Delete </button>)}

                </div>
                <div className="content">
                    <p value={null}>{postItem.description}</p>
                    <img src={"/uploads/" + postItem.image} alt="" />

                </div>
                <div className="info">
                    <div className="item">

                        {data && data.includes(currentUser.id) ? (
                            <FontAwesomeIcon
                                icon={faHeartCircleBolt} style={{ color: "red" }}
                                onClick={() => handleLike(true)}
                            />
                        ) : (
                            <FontAwesomeIcon icon={faHeart} onClick={() => handleLike(false)} />
                        )}
                        {data?.length} Likes


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
                {/* {console.log("postItem.id")}
                {console.log(postItem.id)} */}
            </div>
        </div>
    )
}

export default Post;
