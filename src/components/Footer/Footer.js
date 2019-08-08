import React from 'react';

import classes from './Footer.module.css';

const Footer = (props) => {
    return (
        <footer className={[classes.footer, classes['footer-flex']].join(" ")}>
            <div>
                <h5>Footer</h5>
            </div>
        </footer>
    )
} 

export default Footer;