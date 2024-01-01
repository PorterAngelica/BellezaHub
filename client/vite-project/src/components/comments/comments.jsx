import '../comments/comments.scss'

const Comments = () => {
    //TEMPORARY
    const comments = [
        {
            id:1,
            desc: "Mexico en dia de muertos",
            name:"Rosario Salgado",
            UserId: 1,
            profilePic:
            "https://images.pexels.com/photos/18387293/pexels-photo-18387293/free-photo-of-a-woman-in-red-pants-and-a-sombrero-stands-in-front-of-a-door.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            id:2,
            desc: "First time visiting Mexico in Dia de muertos!",
            name:"Nadia لعربية مؤشرًا",
            UserId:2,
            profilePic: "https://images.pexels.com/photos/15378249/pexels-photo-15378249/free-photo-of-photo-of-a-girl-in-a-car-window.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
    ];
    return (
        <div className="comments">
            <div className="write">
                <img src= "https://images.pexels.com/photos/15378249/pexels-photo-15378249/free-photo-of-photo-of-a-girl-in-a-car-window.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <input type="text" placeholder='write comment' />
                <button>Send</button>
            </div>
            {comments.map((comment)=>(
                <div className="comment">
                <img src={comment.profilePic} />
                <div className="info">
                    <span>{comment.name}</span>
                    <p>{comment.desc}</p>
                </div>
                <span className='date'>1 hour ago</span>
            </div>
            ))}
        </div>
    );
};

export default Comments;
