import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import routes from '../../routes';

import classes from './Navbar.module.css';

const navbar = props => {
    return (
        <div className={[classes.navbar, classes.nav].join(" ")}>
            <nav className={classes.flex}>
                {
                    routes.public.map((route, i) => {
                        return (
                            <div key={i}>
                                <Link className={classes.link} to={route.path}>{route.name}</Link>
                            </div>
                        )
                    })
                }
            </nav>
        </div>
    )
}

export default withRouter(navbar);