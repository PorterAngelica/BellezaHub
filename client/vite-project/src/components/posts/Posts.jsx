import '../posts/Posts.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faShare, faEllipsis} from '@fortawesome/free-solid-svg-icons'
import {  faHeart, faComment } from '@fortawesome/free-regular-svg-icons'
import Post from '../Post/Post'
import {  useQuery } from '@tanstack/react-query'
import { makeRequest } from '../../axios'


const  Posts = () => {
//TEMPORARY DATA
const { isLoading, error, data } = useQuery(["posts"], () =>
makeRequest.get("/posts").then((res)=>{
    return res.data
})
);



    return (
        <div className='posts'>
            {/* {data.map(post=>(
                <Post  post={post} key={post.id}/>
            ))} */}
        </div>

    )
}

export default Posts;
