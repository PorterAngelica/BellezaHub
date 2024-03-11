import { db } from "../connect.js"
import jwt from "jsonwebtoken";

export const getLikes = (req, res) => {
    const q = "SELECT userId FROM social.likes WHERE postId = (?)"

    db.query(q, [req.query.postId], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(data.map(like => like.userId))
    });

}

export const addLike = (req, res) => {
    const q = "INSERT INTO social.likes (`userId`, `postId`) VALUE (?)";
    const values = [
        req.body.userId,
        req.body.postId
    ]

    db.query(q, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("Post has been liked");
    })

}

export const deleteLike = (req, res) => {
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("Not logged in!");

    jwt.verify(token, "secretkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");

        const { userId, postId } = req.body;

        const q = "DELETE FROM social.likes WHERE userId = ? AND postId = ?";

        const values = [userId, postId];

        db.query(q, values, (err, data) => {
            if (err) return res.status(500).json(err);
            return res.status(200).json("liked has been removed");
        })
    })
}