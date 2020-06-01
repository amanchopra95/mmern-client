import React, { useState, useEffect } from 'react';
import classes from './BlogPage.module.css';

const BlogPage = (props) => {

    const [postUrl] = useState(props.match.params.url)
    const [postTitle, setPostTitle] = useState()
    const [postDescription, setPostDescription] = useState()

    useEffect(() => {
        const title = postUrl.split('-').join(' ')
        setPostTitle(title)
        setPostDescription('Some Description about ' + postTitle)
    }, [postUrl, postTitle, postDescription])
    
    return (
        <div>
            <div className={classes["post-title"]}>{postTitle}</div>
            <div className="post-description">{postDescription}</div>
        </div>
    );
}

export default BlogPage;