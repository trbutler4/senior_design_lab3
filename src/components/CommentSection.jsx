import React from "react";
import commentBox from 'commentbox.io'

commentBox('5705371448508416-proj',
    {
        backgroundcolor: '#262626',
        textColor: '#fff'
    }
);

class CommentSection extends React.Component {

    componentDidMount() {
        this.removeCommentBox = commentBox('5705371448508416-proj');
    }

    componentWillUnmount() {
        this.removeCommentBox();
    }

    render() {
        return (
            <div classname="commentBox" />
        )
    }

}

export default CommentSection