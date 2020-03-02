import React from 'react';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';

import Services from '../../services';
import './addstudent.scss';

const SignUp = (props) => {


    const formik = useFormik ({
        initialValues: {
            studentName: "",
            subject1: "",
            marks1: "",
            subject2: "",
            marks2: "",
        },
        // validationSchema: yupRegObj,

        onSubmit: async (values) => {
            const newStudent = await Services.createStudentService(values);
            // eslint-disable-next-line no-unused-expressions
            // newUser.data.studentName ? props.history.push("/signin") : null;
            console.log(values)
        },
    });

      return(
          <div className="student-modal">
            <div className="student-div">
          <form className="add-student-div" onSubmit={formik.handleSubmit} autoComplete="off"> 
                                <div className="title">
                                    REGISTER STUDENT
                                </div>
                                <div className="tagline">
                                    <Link to={'/displaystudents'} className="link">view students</Link>
                                </div>

                                <div className="studentName input-container">
                                    <i class="far fa-user-circle"></i>
                                    <input 
                                        id="studentName" 
                                        name="studentName"
                                        placeholder="studentName"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.studentName} 
                                        />
                                </div>
                                <div className="subject1 input-container">
                                    <i class="far fa-envelope"></i>
                                    <input 
                                        id="subject1" 
                                        name="subject1"
                                        placeholder="subject1" 
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.subject1}
                                    />
                                </div>
                                <div className="marks1 input-container">
                                    <i class="fas fa-key"></i>
                                    <input 
                                        id="marks1" 
                                        name="marks1"
                                        placeholder="marks1"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.marks1}
                                    />
                                </div>

                                <div className="subject2 input-container">
                                    <i class="far fa-envelope"></i>
                                    <input 
                                        id="subject2" 
                                        name="subject2"
                                        placeholder="subject2" 
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.subject2}
                                    />
                                </div>
                                <div className="marks2 input-container">
                                    <i class="fas fa-key"></i>
                                    <input 
                                        id="marks2" 
                                        name="marks2"
                                        placeholder="marks2"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.marks2}
                                    />
                                </div>

                                <div className="input-container">
                                    <button 
                                        type="submit"
                                        className="auth-button">
                                        submit details
                                    </button>
                                </div>

                        </form>
          </div>
        </div>
      );
  }

export default SignUp;