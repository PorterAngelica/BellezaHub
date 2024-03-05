import '../posts/Posts.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShare, faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { faHeart, faComment } from '@fortawesome/free-regular-svg-icons'
import Post from '../Post/Post'
import { useQuery } from '@tanstack/react-query'
import { makeRequest } from '../../axios'
import axios from 'axios'
import { useEffect, useState } from 'react'


const Posts = () => {

    const [post, setPost] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8800/api/posts/post")
        .then(res => {
                console.log(res.data.post)
                setPost(res.data.post)
    })

    .catch(err => console.log(err));

    }, [])

    return (
        <div className='posts'>
            {/* <Post /> */}
            {/* {post.map((post) => <Post post={post} key={post.id} />)} */}
            <Post />
        </div>
        

    )
}

export default Posts;
