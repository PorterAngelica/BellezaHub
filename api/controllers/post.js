import { db } from "../connect.js"
import moment from "moment/moment.js";
import jwt from "jsonwebtoken"

export const getPosts = (req, res) => {
    const userId = req.query.userId;
    // const token = req.cookies.accessToken;
    // if(!token) return res.status(401).json("Not logged in")

    // jwt.verify(token, "secretKey", (err, userInfo) => {
    //     if(err) return res.status(403).json("Token is not valid")

    const q = userId !== undefined && userId !== null
    ? ` SELECT 
    posts.*, 
    users.id AS users_id, 
    users.name, 
    users.profilePic
    FROM 
    social.posts
    JOIN 
    social.users ON users.id = posts.users_id
    WHERE 
    posts.users_id =?`
    :` SELECT posts.*, users.id AS users_id, users.name AS users_name, users.profilePic AS users_profilePic
    FROM social.posts AS posts
    JOIN social.users ON users.id = posts.users_id
    `
    const values = userId !== undefined && userId !== null ? [userId] : [];

    db.query(q, values, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(data)
    });
}


export const addPost = (req, res) => {
    // const token = req.cookies.accessToken;
    // if(!token) return res.status(401).json("Not logged in")

    // jwt.verify(token, "secretKey", (err, userInfo) => {
    //     if(err) return res.status(403).json("Token is not valid")


    const q = "INSERT INTO posts (`description`, `image`, `users_id`, `created_at`) VALUE (?)";
    const values = [
        req.body.description,
        req.body.image,
        req.body.users_id,
        moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")

    ]

    db.query(q, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("Post has been created")
    });
}