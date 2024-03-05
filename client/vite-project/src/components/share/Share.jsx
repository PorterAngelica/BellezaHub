import "./share.scss";
import Image from "../../assets/img.png";
import Map from "../../assets/map.png";
import Friend from "../../assets/friend.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useQueryClient, useMutation } from '@tanstack/react-query'
import { makeRequest } from "../../axios.js"
import axios from "axios";

const Share = () => {

    const [post, setPost] = useState({})
    const [image, setImage] = useState(null)
    const [description, setDescription] = useState("")
    const [users_id, setUsers_id] = useState("")

    const { currentUser } = useContext(AuthContext)

    // const queryClient = useQueryClient()

    // const mutation = useMutation({
    //     mutationFn: () =>  makeRequest.post("/posts", newPost),
    //     onSuccess: () => {
    //         queryClient.invalidateQueries(["posts"]);
    //     },
    //     onError: (error) => {
    //       // Error actions
    //         { error.message }
    //     },
    // });
    

    // const mutation = useMutation(
    //     (newPost) => makeRequest.post("/posts", newPost),
    //     {
    //         onSuccess: () => {
    //             queryClient.invalidateQueries("[posts]");
    //         },
    //     }
    // );

    const handleClick = e => {
        e.preventDefault();
        // mutation.mutate({ description })
        axios.post("http://localhost:8800/api/posts/post", {
            image,
            description,
            users_id

        }).then(res => {
            console.log(res); // always console log to get used to tracking your data!
            console.log(res.data);

            setPost([...post, res.data]);
        })
        .catch(err => console.log(err))
}


    return (
        
        <div className="share">
            <div className="container">
                <div className="top">
                    <img
                        src={currentUser.profilePic}
                        alt=""
                    />

                    <input type="text" placeholder={`What's on your mind ${currentUser.name}?`} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <hr />
                <div className="bottom">
                    <div className="left">
                        <input type="file" id="file" style={{ display: "none" }} onChange={(e) => setImage(e.target.files[0])} />
                        <label htmlFor="file">
                            <label htmlFor="">id</label>
                            <input type="text"  onChange={(e)=> setUsers_id(e.target.value)}/>
                            <div className="item">
                                <img src={Image} alt="" />
                                <span>Add Image</span>
                            </div>
                        </label>
                        <div className="item">
                            <img src={Map} alt="" />
                            <span>Add Place</span>
                        </div>
                        <div className="item">
                            <img src={Friend} alt="" />
                            <span>Tag Friends</span>
                        </div>
                    </div>
                    <div className="right">
                        <button onClick={handleClick}>Share</button>
                    </div>
                </div>
            </div>
        </div>
                    
    );
};

export default Share;