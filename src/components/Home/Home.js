import React from 'react';
import Blog from '../Blogs/Blog/Blog';
import classes from './Home.module.css';

const Home = props => {
    
    const styles = {
        'padding': '2rem',
        'textAlign': 'center'
    }

    const posts = [
        {
            "title": "First Post",
            "description": "Description about First Post",
            "url": "blogs/first-post"
        },
        {
            "title": "Second Post",
            "description": "Description about Second Post",
            "url": "blogs/second-post"
        },
        {
            "title": "Third Post",
            "description": "Description about Third Post",
            "url": "blogs/third-post"
        },
        {
            "title": "Fourth Post",
            "description": "Description about Fourth Post",
            "url": "blogs/fourth-post"
        },
        {
            "title": "Fifth Post",
            "description": "Description about Fifth Post",
            "url": "blogs/fifth-post"
        },
        {
            "title": "Sixth Post",
            "description": "Description about Sixth Post",
            "url": "blogs/sixth-post"
        }
    ]

    return (
        <div style={styles} className="container">
            <h2>Home</h2>
            <div className="row justify-content-center align-items-center">
                {
                    posts.map((post, index) => {
                        return (
                          <div key={post.title + index} className={classes["px-0"] + " col-lg-4"}>
                            <Blog
                              title={post.title}
                              description={post.description}
                              url={post.url}
                            />
                          </div>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default Home;