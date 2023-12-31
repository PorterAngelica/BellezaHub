import '../posts/Posts.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faShare, faEllipsis} from '@fortawesome/free-solid-svg-icons'
import {  faHeart, faComment } from '@fortawesome/free-regular-svg-icons'
import Post from '../Post/Post'


const  Posts = () => {
//TEMPORARY DATA
    const posts = [
        {
            id:1,
            name:"Rosario Salgado",
            UserId: 1,
            profilePic:
            "https://images.pexels.com/photos/18387293/pexels-photo-18387293/free-photo-of-a-woman-in-red-pants-and-a-sombrero-stands-in-front-of-a-door.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            desc: "Mexico en dia de muertos",
            img:"https://images.pexels.com/photos/14169436/pexels-photo-14169436.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            id:2,
            name:"Nadia لعربية مؤشرًا",
            UserId:2,
            profilePic: "https://images.pexels.com/photos/15378249/pexels-photo-15378249/free-photo-of-photo-of-a-girl-in-a-car-window.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            desc: "First time visiting Mexico in Dia de muertos!",
            img:"https://images.pexels.com/photos/7706899/pexels-photo-7706899.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
    ];

    return (
        <div className='posts'>
            {posts.map(post=>(
                <Post  post={post} key={post.id}/>
            ))}
        </div>

    )
}

export default Posts;
