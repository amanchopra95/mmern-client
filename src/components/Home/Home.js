import React from 'react';
import Blogs from '../Blogs/Blogs'

const Home = props => {
    
    const styles = {
        'padding': '2rem',
        'textAlign': 'center'
    }

    return (
        <div style={styles}>
            <h2>Home</h2>
            <Blogs />
        </div>
    )
}

export default Home;