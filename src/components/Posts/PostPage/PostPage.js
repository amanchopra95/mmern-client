import React from 'react';
import classes from 'PostPage.module.css';

const PostPage = (props) => {
    return (
        <div>
            <div className={classes["post-title"]}>{props.title}</div>
            <div className="post-description">{props.description}</div>
        </div>
    );
}

export default PostPage;