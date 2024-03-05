import "./share.scss";
import Image from "../../assets/img.png";
import Map from "../../assets/map.png";
import Friend from "../../assets/friend.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useQueryClient, useMutation } from '@tanstack/react-query'
import { makeRequest } from "../../axios.js"
import axios from "axios";
import { Navigate } from "react-router-dom";

const Share = () => {

    const [post, setPost] = useState({})
    const [file, setFile] = useState(null)
    const [description, setDescription] = useState("")
    const [users_id, setUsers_id] = useState("")

    const { currentUser } = useContext(AuthContext)

    const upload = async () => {
        try{
            const formData = new FormData();
            formData.append("file", file);
            const res = await makeRequest.post("/upload", formData);
            return res.data
        }catch(err){
            console.log(err)
        }
    }

    const handleClick = async (e) => {
        e.preventDefault();
        let imgUrl = ""
        if (file) imgUrl = await upload();
        axios.post("http://localhost:8800/api/posts/post", {
            image:imgUrl,
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
                    <div className="left">
                    <img
                        src={currentUser.profilePic}
                        alt=""
                    />

                    <input type="text" placeholder={`What's on your mind ${currentUser.name}?`} onChange={(e) => setDescription(e.target.value)} />
                    </div>
                    <div className="right">
                        {file && <img className="file" src={URL.createObjectURL(file)} />}
                    </div>
                </div>
                <hr />
                <div className="bottom">
                    <div className="left">
                        <input type="file" id="file" style={{ display: "none" }} onChange={(e) => setFile(e.target.files[0])} />
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