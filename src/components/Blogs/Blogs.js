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
        
    }

    getPosts = () => {
        return fetch('/posts', {
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

