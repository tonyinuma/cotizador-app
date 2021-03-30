import React from 'react';

const LoginForm = () => {

    return (
        <form action="#" className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
                <i className="fas fa-user"/>
                <input type="text" placeholder="Username"/>
            </div>
            <div className="input-field">
                <i className="fas fa-lock"/>
                <input type="password" placeholder="Password"/>
            </div>
            <input type="submit" value="Login" className="btn solid"/>
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
                <a href="javascript:void(0)" className="social-icon">
                    <i className="fab fa-facebook-f"/>
                </a>
                <a href="#" className="social-icon">
                    <i className="fab fa-twitter"/>
                </a>
                <a href="#" className="social-icon">
                    <i className="fab fa-google"/>
                </a>
                <a href="#" className="social-icon">
                    <i className="fab fa-linkedin-in"/>
                </a>
            </div>
        </form>
    );
}

export default LoginForm;