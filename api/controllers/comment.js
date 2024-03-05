import { db } from "../connect.js"
import moment from "moment/moment.js";

export const getComments = (req, res) => {
const q = "SELECT * FROM comments WHERE posts_id = (?)"
    db.query(q,[req.query.posts_id], (err,data) =>{
        if (err) return res.status(500).json(err);
        return res.status(200).json(data)
    });
}

export const addComment = (req, res) => {
    const q = "INSERT INTO comments (`cdescription`, `users_id`, `posts_id`, `created_at`) VALUE (?)";
    const values = [
        req.body.cdescription,
        req.body.users_id,
        req.body.posts_id,
        moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")
        
    ]
    
    db.query(q,[values], (err,data) =>{
        if (err) return res.status(500).json(err);
        return res.status(200).json("Comment has been created")
    });

}