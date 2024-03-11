import React, { useState, useContext } from 'react'
import "./update.scss"
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { makeRequest } from '../../axios'
import { AuthContext } from '../../context/AuthContext'
// import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const Update = ({ setOpenUpdate, user }) => {
    const [cover, setCover] = useState(null)
    const [profile, setProfile] = useState(null)
    const { currentUser } = useContext(AuthContext)
    const [texts, setTexts] = useState({
        name: currentUser.name,
        city: "",
        nationality: "",
    });

    console.log("currentUser")
    console.log(currentUser)
    const upload = async (file) => {
        try {
            const formData = new FormData();
            formData.append("file", file);
            const res = await makeRequest.post("/upload", formData);
            return res.data
        } catch (err) {
            console.log(err)
        }
    };

    const handleChange = (e) => {
        setTexts((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
    };

    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: (user) => makeRequest.put("/users", user),
        onSuccess: () => {
            queryClient.invalidateQueries(["user"]);
        },
        onError: (error) => {
            { error.message }
            console.log(error)
        }
    })

    console.log("user")
    console.log(user)

    const handleSubmit = async (e) => {
        e.preventDefault();
        let coverUrl;
        let profileUrl;
        coverUrl = cover ? await upload(cover) : user.coverPic;
        profileUrl = profile ? await upload(profile) : user.profilePic;

        mutation.mutate({ ...texts, coverPic: coverUrl, profilePic: profileUrl });
        setOpenUpdate(false);
        setCover(null);
        setProfile(null);
    }

    console.log("user3")
    console.log(user)


    return (
        <div className="update">
            <div className="wrapper">
                <h1>Update Your Profile</h1>
                <form>
                    <div className="files">
                        <label htmlFor="cover">
                            <span>Cover Picture</span>
                            <div className="imgContainer">
                                <img
                                    src={
                                        cover
                                            ? URL.createObjectURL(cover)
                                            : "/uploads/" + currentUser.coverPic
                                    }
                                    alt=""
                                />
                                {/* <CloudUploadIcon className="icon" /> */}
                            </div>
                        </label>
                        <input
                            type="file"
                            id="cover"
                            style={{ display: "none" }}
                            onChange={(e) => setCover(e.target.files[0])}
                        />
                        <label htmlFor="profile">
                            <span>Profile Picture</span>
                            <div className="imgContainer">
                                <img
                                    src={
                                        profile
                                            ? URL.createObjectURL(profile)
                                            : "/uploads/" + currentUser.profilePic
                                    }
                                    alt=""
                                />
                                {/* <CloudUploadIcon className="icon" /> */}
                            </div>
                        </label>
                        <input
                            type="file"
                            id="profile"
                            style={{ display: "none" }}
                            onChange={(e) => setProfile(e.target.files[0])}
                        />
                    </div>
                    <label>Email</label>
                    <input
                        type="text"
                        value={texts.email}
                        name="email"
                        onChange={handleChange}
                    />
                    <label>Name</label>
                    <input
                        type="text"
                        value={texts.name}
                        name="name"
                        onChange={handleChange}
                    />
                    <label>Country / City</label>
                    <input
                        type="text"
                        name="city"
                        value={texts.city}
                        onChange={handleChange}
                    />
                    <label>Nationality</label>
                    <input
                        type="text"
                        name="nationality"
                        value={texts.nationality}
                        onChange={handleChange}
                    />
                    <button onClick={handleSubmit}>Update</button>
                </form>
                <button className="close" onClick={() => setOpenUpdate(false)}>
                    close
                </button>
            </div>
        </div>
    );
};


export default Update
