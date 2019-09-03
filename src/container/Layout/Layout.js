import React, { Component, Suspense, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import routes from '../../routes';
import classes from './Layout.module.css';

import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

class Layout extends Component {
    render () {
        return (
            <Router>
                <Navbar />
                <main className={classes.main}>
                    <Fragment>
                        <Suspense fallback="Loading...">
                            <Switch>
                                {
                                    routes.public.map((route, i) => {
                                        return (
                                            <Route key={i} exact={route.exact} path={route.path} component={route.component} />
                                        )
                                    })
                                }
                            </Switch>
                        </Suspense>
                    </Fragment>
                    <Fragment>
                        {this.props.children}
                    </Fragment>
                </main>
                <Footer />
            </Router>
        )
    }
}

export default Layout;