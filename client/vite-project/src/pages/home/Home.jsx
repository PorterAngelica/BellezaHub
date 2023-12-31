import React from 'react'
import "../home/home.scss"
import Stories from '../../components/stories/Stories';
import Post from '../../components/posts/Posts';


const Home = () => {
    return (
        <div className='home'>
            <Stories />
            <Post />
            </div>
    )
}

export default Home;