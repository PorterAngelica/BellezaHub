import '../posts/Posts.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShare, faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { faHeart, faComment } from '@fortawesome/free-regular-svg-icons'
import Post from '../Post/Post'
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from '../../axios'
import axios from 'axios'
import { useEffect, useState } from 'react'


const Posts = () => {
    const {isLoading, error, data} = useQuery({
        queryKey:["posts"],
        queryFn: () => makeRequest.get("/posts").then((response) => {
            return response.data
        } )
    })

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        console.log(error)
        return <div>Error: {error.message}</div>;
    }
    return (
        <div className='posts'>
            
            {data && data.map((postItem) => <Post postItem={postItem} key={data.id} />)}
        </div>
        

    )
}

export default Posts;
