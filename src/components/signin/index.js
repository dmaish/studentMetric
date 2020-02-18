import React from 'react';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';

import Services from './../../services';
import './signin.scss';

const SignIn = (props) => {

    const loginFormik = useFormik ({
        initialValues: {
            loginEmail: "",
            loginPassword: "",
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    })

    return (
        <div className="auth-modal">
            <div className="auth-div">
            <form className="login-div" onSubmit={loginFormik.handleSubmit} autoComplete="off">
                            <div className="title">
                                    LOGIN
                            </div>
                            <div className="tagline">
                                    Don't have an account? <Link to={'/'} className="link">Register here.</Link>
                            </div>
                            <div className="email input-container login-input">
                            {loginFormik.touched.loginEmail && loginFormik.errors.loginEmail ? <div className="input-error-div">{loginFormik.errors.loginEmail}</div> : null}
                                <i class="far fa-envelope"></i>
                                <input 
                                id="loginEmail"
                                name="loginEmail"
                                placeholder="email"
                                onChange={loginFormik.handleChange}
                                onBlur={loginFormik.handleBlur}
                                value={loginFormik.values.loginEmail}/>
                            </div>
                            <div className="password input-container login-input">
                            {loginFormik.touched.loginPassword && loginFormik.errors.loginPassword ? <div className="input-error-div">{loginFormik.errors.loginPassword}</div> : null}
                                <i class="fas fa-key"></i>
                                <input
                                    id="loginPassword"
                                    name="loginPassword"
                                    placeholder="password"
                                    onChange={loginFormik.handleChange}
                                    onBlur={loginFormik.handleBlur}
                                    value={loginFormik.values.loginPassword}
                                />
                            </div>
                            <div className="input-container">
                                    <button type="submit" className="auth-button">
                                        Sign In
                                    </button>
                            </div>
                        </form>
        </div>
        </div>
    );
}

export default SignIn;