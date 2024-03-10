import '../posts/Posts.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShare, faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { faHeart, faComment } from '@fortawesome/free-regular-svg-icons'
import Post from '../Post/Post'
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useParams } from 'react-router-dom'
import { makeRequest } from '../../axios'
import axios from 'axios'
import { useEffect, useState } from 'react'


const Posts = ({userId}) => {
    
    const {isLoading, error, data} = useQuery({
        queryKey:["posts"],
        queryFn: () => {
            const url = userId !== undefined ? `/posts?userId=${userId}` : "/posts";
            return makeRequest.get(url).then((response) => {
                return response.data
            })
        } 
    })
    // console.log("userId + posts")
    // console.log(userId)

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        console.log(error)
        return <div>Error: {error.message}</div>;
    }
    return (
        <div className='posts'>
            
            {data && data.map((postItem) => <Post key={postItem.id} postItem={postItem}  />)}
        </div>
        

    )
}

export default Posts;
