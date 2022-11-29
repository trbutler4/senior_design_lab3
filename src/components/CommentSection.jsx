import React from "react";
import '../styles/commentSection.css'
import { useState } from "react";

const CommentSection = () => {
    // updating comments and comment list
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);

    // update comment list on click
    const onClickHandler = () => {
        setComments((comments) => [...comments, comment]);
    }

    // update comment on change
    const onChangeHandler = (e) => {
        setComment(e.target.value)
    }

    return (
        <div className="main-comment-container">
            {comments.map((text) => (
                <div className="comment-container">{text}</div>
            ))}
            <div className="comment-flexbox">
                <h3 className="comment-header">Comments</h3>
                <textarea 
                    value={comment} 
                    onChange={onChangeHandler} 
                    className="comment-text"
                />
                <button onClick={onClickHandler} className="comment-button">Submit</button>
            </div>
        </div>
    )
}



export default CommentSection