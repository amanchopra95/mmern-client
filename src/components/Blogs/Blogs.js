import React from 'react';
import Blog from './Blog/Blog';

const Blogs = (props) => {

    return (
        <div>
            {
                props.posts.map((post) => {
                    return (
                        <Blog
                        key={post.id}
                        title={post.title}
                        description={post.description}
                        />
                    );
                })
            }
        </div>
    );
}

export default Blogs;