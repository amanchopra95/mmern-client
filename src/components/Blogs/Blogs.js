import React, { Component } from 'react';

import Posts from '../Posts/Posts';

class Blogs extends Component {

    state = {
        posts: []
    }

    componentDidMount() {
        this.getPosts()
        .then((data) => {
            this.setState({ posts: [...data] })
          })
    }

    componentWillUnmount() {
        this.setState((prevState, props) => {
            prevState.posts.length = 0;
            return {
                posts: [...prevState.posts]
            }
        })
    }

    getPosts = () => {
        return fetch('/api/posts', {
            mode: 'no-cors'
          })
          .then((res) => res.json())
    }

    render () {
        return (
            <div>
                <h1>Blogs</h1>
                <Posts posts={[...this.state.posts]} />
            </div>
        )
    }
}

export default Blogs;

