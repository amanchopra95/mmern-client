import React from 'react';
import classes from './SignIn.module.css';

class SignIn extends React.Component {

    state = {
        loginForm: {
            email: '',
            password: ''
        }
    }

    inputChangeHandler = (e) => {
        this.setState({ identifier: e.target.value })
    }

    render () {
        return (
            <div className={classes['flex']}>
                <form className="form-control">
                    <div className="row">
                        <div className="col-4">
                            <label>Email</label>
                        </div>
                        <div className="col-8">
                            <input className={classes['input']} 
                                type="email" 
                                required 
                                onChange={this.inputChangeHandler} 
                                id="email" 
                                name="email" 
                                value={this.state.email} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <label>Password</label>
                        </div>
                        <div className="col-8">
                            <input className={classes['input']}
                                type="password" 
                                required 
                                onChange={this.inputChangeHandler} 
                                id="password" 
                                name="password" 
                                value={this.state.password} />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;