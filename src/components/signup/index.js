import React from 'react';
import { useFormik } from 'formik';

import './signup.scss';

const SignUp = () => {

    const formik = useFormik ({
        initialValues: {
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
        // validationSchema: yupRegObj,

        onSubmit: async (values) => {

        },
    });

      return(
        <div className="landing-page">
          <div className="auth-modal">

            <div className="auth-div">
          <form className="register-div" onSubmit={formik.handleSubmit} autoComplete="off"> 
                                <div className="title">
                                    REGISTER
                                </div>
                                <div className="tagline">
                                    Already have an account? Login here.
                                </div>

                                <div className="username input-container">
                                {formik.touched.username && formik.errors.username ? <div className="input-error-div">{formik.errors.username}</div> : null}
                                    <i class="far fa-user-circle"></i>
                                    <input 
                                        id="username" 
                                        name="username"
                                        placeholder="username"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.username} 
                                        />
                                </div>
                                <div className="email input-container">
                                {formik.touched.email && formik.errors.email ? <div className="input-error-div">{formik.errors.email}</div> : null}
                                    <i class="far fa-envelope"></i>
                                    <input 
                                        id="email" 
                                        name="email"
                                        placeholder="email" 
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.email}
                                    />
                                </div>
                                <div className="password input-container">
                                {formik.touched.password && formik.errors.password ? <div className="input-error-div">{formik.errors.password}</div> : null}
                                    <i class="fas fa-key"></i>
                                    <input 
                                        id="password" 
                                        name="password"
                                        placeholder="password"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.password}
                                    />
                                </div>
                                <div className="confirm-pass input-container">
                                {formik.touched.confirmPassword && formik.errors.confirmPassword ? <div className="input-error-div">{formik.errors.confirmPassword}</div> : null}
                                    <i class="far fa-check-square"></i>
                                    <input 
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        placeholder="confirm password"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.confirmPassword}
                                    />
                                </div>

                                <div className="input-container">
                                    <button 
                                        type="submit"
                                        className="auth-button">
                                        create account
                                    </button>
                                </div>

                        </form>
          </div>
        </div>
        </div>
      );
  }

export default SignUp;