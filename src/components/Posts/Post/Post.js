import React from 'react';
import classes from './Post.module.css';

const Post = props => {
    return (
        <div className={classes['blog-card']}>
            <div className={classes['blog-title']}>
                <h2>{props.title}</h2>
            </div>
            <div className={classes['blog-description']}>
                <p>{props.description}</p>
            </div>
        </div>
    )
} 

export default Post;