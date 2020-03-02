import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Services from '../../services';
import './displaystudent.scss';

export default class Displaystudent extends Component {
    state = {
        allStudents: null,
    }

    componentDidMount() {
        console.log(this.fetchStudents());
        this.fetchStudents();
    }

    fetchStudents = async() => {
        const allStudents = await Services.getAllStudents();
        this.setState({allStudents});
    }


    render(){
        const {allStudents} = this.state;
        return(
            <div className="display">
                <div className="header">
                    <div>Students' Details</div>
                </div>
                { allStudents ?

                <ul className='students'>
                    <li className="headings">
                    <div className="student-name">Name</div>
                    <div className="student-subject1">Subject 1</div>
                    <div className="student-marks1">Marks 1</div>
                    <div className="student-subject2">Subject 2</div>
                    <div className="student-marks2">Marks 2 </div>

                        </li>
                    {allStudents.map(eachStudent => (
                        <li>
                            <div className="each-student">
                                <div className="student-name">{eachStudent.studentName}</div>
                                <div className="student-subject1">{eachStudent.subject1}</div>
                                <div className="student-marks1">{eachStudent.marks1}</div>
                                <div className="student-subject2">{eachStudent.subject2}</div>
                                <div className="student-marks2">{eachStudent.marks2}</div>
                            </div>
                            
                        </li>
                    ))}
                </ul>  : 
                <div>waiting for students</div>}

            </div>
        )
    }
}