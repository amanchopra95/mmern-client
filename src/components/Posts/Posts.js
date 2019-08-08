import React from 'react';
import Post from './Post/Post';

const Posts = (props) => {

    return (
        <div>
            {
                props.posts.map((post) => {
                    return (
                        <Post
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

export default Posts;