import React from 'react';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';

import Services from './../../services';
import './signin.scss';

const SignIn = (props) => {

    const loginFormik = useFormik ({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: async (values) => {
            console.log('uservalues++++++++++++++++++++++',values)
            const loggedInUser = await Services.loginUserService(values);
            alert(JSON.stringify(loggedInUser, null, 2));
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
                            {loginFormik.touched.email && loginFormik.errors.email ? <div className="input-error-div">{loginFormik.errors.email}</div> : null}
                                <i class="far fa-envelope"></i>
                                <input 
                                id="email"
                                name="email"
                                placeholder="email"
                                onChange={loginFormik.handleChange}
                                onBlur={loginFormik.handleBlur}
                                value={loginFormik.values.email}/>
                            </div>
                            <div className="password input-container login-input">
                            {loginFormik.touched.password && loginFormik.errors.password ? <div className="input-error-div">{loginFormik.errors.password}</div> : null}
                                <i class="fas fa-key"></i>
                                <input
                                    id="password"
                                    name="password"
                                    placeholder="password"
                                    onChange={loginFormik.handleChange}
                                    onBlur={loginFormik.handleBlur}
                                    value={loginFormik.values.password}
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