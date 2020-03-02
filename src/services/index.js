import firebaseObj from './../firebase';

export default class Services {

    static async createStudentService (student) {
        const { studentName, subject1, marks1, subject2, marks2 } = student;
        await firebaseObj.database().ref(`/allStudents/${student.studentName}`).set({
            studentName,
            subject1,
            marks1,
            subject2,
            marks2
        });
        const allStudents = await firebaseObj.database().ref('allStudents').once('value').then((snap) => snap.val());
        console.log('allstuddddeeents', allStudents)
    }

    static async getAllStudents () {
        let studentDetails = [];
        const allStudents = await firebaseObj.database().ref('allStudents').once('value').then((snap) => snap.val());
        for (let student in allStudents){
            studentDetails.push(allStudents[student]);
        }
        return studentDetails;
    }
}