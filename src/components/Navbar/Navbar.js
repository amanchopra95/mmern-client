import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import routes from '../../routes';

import classes from './Navbar.module.css';

const navbar = props => {
    return (
        <div className={[classes.navbar, classes.nav].join(" ")}>
            <nav className={[classes['flex-between'], classes['gapping']].join(" ")}>
                <div>
                    <Link className={classes.link} to="/">Logo</Link>
                </div>
                <div className={classes['flex-between']}>
                    <div>
                        <Link className={classes.link} to="/signin">SignIn</Link>
                    </div>
                    <div className={[classes['signup-btn']]}>
                        <Link className={classes.link} to="/signup">SignUp</Link>
                    </div>
                </div>
            </nav>
            <div className={[classes['flex'], classes['sticky-navbar']].join(' ')}>
                {
                    routes.public.map((route, i) => {
                        return (
                            <div key={i}>
                                { route.name ? 
                                    <Link className={classes.link} to={route.path}>{route.name}</Link>
                                    :
                                    null
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default withRouter(navbar);