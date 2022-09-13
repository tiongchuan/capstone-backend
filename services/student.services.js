import { Student, viewStudent } from "../models/index.js";

async function getStudent(studentId) {

    let result = {
        message: null,
        status: null,
        data: null,
    };

    const student = await Student.findByPk(studentId);

    if (!student) {
        result.message = `Student ID ${studentId} is not found.`;
        result.status = 404;
        return result;
    }

    result.data = student;
    result.status = 200;
    result.message = "Retrieve successful";

    return result;
}

async function getStudents() {

    let result = {
        message: null,
        status: null,
        data: null,
    };
    
    const students = await Student.findAll();

    result.data = students;
    result.status = 200;
    result.message = "Retrieve successful";

    return result;
}

async function updateStudent(studentId, userId, schoolId, name, parent, remarks) {

    let result = {
        message: null,
        status: null,
        data: null,
    };
    
    const student = await Student.findByPk(studentId);

    if (!student) {
        result.message = `Student ID ${studentId} is not found.`;
        result.status = 404;
        return result;
    }

    student.schoolId = schoolId;
    student.userId = userId;
    student.name = name;
    student.parent = parent;
    student.remarks = remarks;

    await student.save();
    result.data = student;
    result.status = 200;
    result.message = "Student updated successful";

    return result;
}

async function deleteStudent(studentId) {

    let result = {
        message: null,
        status: null,
        data: null,
    };
    
    const student = await Student.findByPk(studentId);

    if (!student) {
        result.message = `Student ID ${studentId} is not found.`;
        result.status = 404;
        return result;
    }

    await student.destroy();
    result.data = student;
    result.status = 200;
    result.message = "Student deleted successful";

    return result;
}

async function addStudent(userId, schoolId, name, parent, remarks) {

    let result = {
        message: null,
        status: null,
        data: null,
    };
    
    const student = await Student.create({userId, schoolId, name, parent, remarks});

    result.data = student;
    result.status = 200;
    result.message = "Student added successful";

    return result;
}

async function getViewStudent() {
    let result = {
      message: null,
      status: null,
      data: null,
    };
  
    const studentView = await viewStudent.findAll();
  
    result.data = studentView;
    result.status = 200;
    result.message = `Retrieve successful`;
    return result
  }

  async function getViewStudentByUserId(userId) {

    let result = {
        message: null,
        status: null,
        data: null,
    };

    const studentView = await viewStudent.findAll({
        where: {
          userId: userId
        }
      });

    result.data = studentView;
    result.status = 200;
    result.message = `Retrieve successful`;

    return result
}


export {
   getStudent,
   getStudents,
   updateStudent,
   deleteStudent,
   addStudent,
   getViewStudent,
   getViewStudentByUserId
};