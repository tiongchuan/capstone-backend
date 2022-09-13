import { getStudent, getStudents, updateStudent, deleteStudent, addStudent, getViewStudent, getViewStudentByUserId } from "../services/student.services.js";

class StudentController {

  // GET /general/student/:studentId
  async retrieveStudent(req, res, next) {

    const result = await getStudent(req.params.studentId);

    res.status(result.status);

    return res.json({ data: result.data, status: result.status, message: result.message });
  } 

  // GET /general/students
  async retrieveStudents(req, res, next) {

    const result = await getStudents();

    res.status(result.status);

    return res.json({ data: result.data, status: result.status, message: result.message });
  }  

  // POST /protected/student/update
  async update(req, res, next) {

    if (typeof req.body.studentId !== "number") 
    {
      res.status(400);
      return res.json({ message: "Incorrect request data" });
    }

    const result = await updateStudent(req.body.studentId, req.body.userId, req.body.schoolId, req.body.name, req.body.parent, req.body.remarks);    
    
    res.status(result.status);

    return res.json({ data: result.data, status: result.status, message: result.message });
  }

    // DELETE /protected/student/delete/:studentId
    async delete(req, res, next) {

    const result = await deleteStudent(req.params.studentId);

    res.status(result.status);

    return res.json({ data: result.data, status: result.status, message: result.message });
  }

  // PUT /protected/student/add
  async add(req, res, next) {

    const result = await addStudent(req.body.userId, req.body.schoolId, req.body.name, req.body.parent, req.body.remarks);    
    
    res.status(result.status);

    return res.json({ data: result.data, status: result.status, message: result.message }); 
  }

  // GET /general/viewStudent
  async getViewStudent(req, res, next) {

    const result = await getViewStudent();

    res.status(result.status);

    return res.json({ data: result.data, status: result.status, message: result.message });
  }

    // GET /general/viewStudent/:userId
    async getViewStudentByUserId(req, res, next) {

    const result = await getViewStudentByUserId(req.params.userId);

    res.status(result.status);

    return res.json({ data: result.data, status: result.status, message: result.message });
  }

}

export default StudentController;