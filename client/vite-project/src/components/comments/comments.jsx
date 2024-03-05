import { useContext, useState } from 'react';
import '../comments/comments.scss'
import { AuthContext } from "../../context/AuthContext"
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import moment from 'moment/moment.js'
import { makeRequest } from '../../axios';

const Comments = ({postId}) => {

    const [cdescription, setCdescription] = useState("")
    const { currentUser } = useContext(AuthContext)

    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: () => makeRequest.post("/comments", newComment),
        onSuccess: () => {
            queryClient.invalidateQueries(["comments"]);
        },
        onError: (error) => {
            { error.message }
        },
    });


    const handleClick = async (e) => {
        e.preventDefault();
        mutation.mutate({ cdescription, postId });
        // setCdesc("");
    };

    const { isLoading, error, data } = useQuery({
        queryKey: ["comments"],
        queryFn: () => makeRequest.get("/comments").then((res) => {
            console.log(res.data); // Logging data inside the arrow function
            return res.data;
    })
})

    console.log("postId")
    console.log(postId)
    console.log("postId")

    console.log("data")
    console.log(data)

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        console.log(error)
        return <div>Error: {error.message}</div>;
    }
    console.log("data")
    console.log(data)
    return (
        <div className="comments">
            <div className="write">
                <img src="https://images.pexels.com/photos/15378249/pexels-photo-15378249/free-photo-of-photo-of-a-girl-in-a-car-window.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <input type="text" placeholder='write comment'  onClick={(e) => setCdescription(e.target.value)} />
                <button onClick={handleClick} >Send</button>
            </div>
                {data.map((comment) => (
                        <div className="comment">
                            {/* <img src={"/upload/" + comment.profilePic} /> */}
                            <div className="info">
                                {/* <span>{comment.name}</span> */}
                                <p>{comment.cdescription}</p>
                            </div>
                            <span className='date'>{moment(comment.created_at).fromNow()}</span>
                        </div>
                    ))
                }
        </div>
    );
};

export default Comments;
