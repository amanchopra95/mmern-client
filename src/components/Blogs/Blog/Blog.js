import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Blog.module.css';

const Blog = props => {
    return (
        <React.Fragment>
            <Link to={props.url}>
                <div className={classes['blog-card']}>
                    <div className={classes['blog-title']}>
                        <h2>{props.title}</h2>
                    </div>
                    <div className={classes['blog-description']}>
                        <p>{props.description}</p>
                    </div>
                </div>
            </Link>
        </React.Fragment>
    )
} 

export default Blog;