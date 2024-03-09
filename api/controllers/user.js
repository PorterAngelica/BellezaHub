import { db } from "../connect.js"

export const getUser = (req, res) => {
    const userId = req.params.userId;
    const q = " SELECT * FROM users WHERE id=?";

    db.query(q, [userId], (err,data) => {
        if(err) return res.status(500).json(err)
        if (data.length === 0) {
            return res.status(404).json({ message: "User not found" });
        }
        const { password,...others } = data[0];
        return res.status(200).json(others)
    }); 

}

