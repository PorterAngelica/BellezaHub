import '../posts/Posts.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShare, faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { faHeart, faComment } from '@fortawesome/free-regular-svg-icons'
import Post from '../Post/Post'
import { useQuery } from '@tanstack/react-query'
import { makeRequest } from '../../axios'
import axios from 'axios'
import { useEffect, useState } from 'react'


const Posts = (props) => {

    const [post, setPost] = useState([])

    useEffect(() => {
        fetch("http://localhost:8800/api/posts")
        .then(response => response.json())
        .then(response => { 
            console.log("response")
            console.log(response)
            setPost(response)
            setDescription(null)
        })
        
        .catch(err => console.log(err));
        
    }, [])
    
    // console.log(post)
    return (
        <div className='posts'>
            
            {post && post.map((postItem) => <Post postItem={postItem} key={post.id} />)}
        </div>
        

    )
}

export default Posts;
