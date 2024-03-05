import { db } from "../connect.js"
import moment from "moment/moment.js";
import jwt from "jsonwebtoken"

export const getPosts = (req, res) => {
    // const token = req.cookies.accessToken;
    // if(!token) return res.status(401).json("Not logged in")

    // jwt.verify(token, "secretKey", (err, userInfo) => {
    //     if(err) return res.status(403).json("Token is not valid")
        
    const q = "SELECT * FROM posts"
    db.query(q, (err,data) =>{
        if (err) return res.status(500).json(err);
        return res.status(200).json(data)
    });
}


export const addPost = (req, res) => {
    // const token = req.cookies.accessToken;
    // if(!token) return res.status(401).json("Not logged in")

    // jwt.verify(token, "secretKey", (err, userInfo) => {
    //     if(err) return res.status(403).json("Token is not valid")
        
        
    const q = "INSERT INTO posts (`description`, `image`, `users_id`, `createdAt`) VALUES ?";
    const values = [
        req.body.description,
        req.body.image,
        users_id,
        moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")
        
    ]
    
    db.query(q,[values], (err,data) =>{
        if (err) return res.status(500).json(err);
        return res.status(200).json("Post has been created")
    });
}