import { 
  addEnrollment, 
  getEnrollment, 
  getEnrollments, 
  updateEnrollment, 
  deleteEnrollment,
  getViewEnrollment,
  getViewEnrollmentByUserId } from "../services/enrollment.services.js";

class EnrollmentController {

// PUT /protectedl/enrollment/add
async createEnrollment(req,res,next){

  const result = await addEnrollment(req.body.studentId, req.body.tutorId, req.body.subjectId, req.body.enrollmentDate, req.body.comments, req.body.latestScore, req.body.bookingTime)
  
  res.status(result.status);

  return res.json({ data: result.data, message: result.message });
}


// GET /general/enrollment/:enrollmentId
async retrieveEnrollment(req, res, next) {

  const result = await getEnrollment(req.params.enrollmentId);  

  res.status(result.status);

  return res.json({ data: result.data, message: result.message });
} 

// GET /general/enrollments
async retrieveEnrollments(req, res, next) {

  const result = await getEnrollments();   

  res.status(result.status);

  return res.json({ data: result.data, message: result.message });
}  

// POST /protected/enrollment/update
async updateEnrollment(req, res, next) {

  if (typeof req.body.enrollmentId !== "number") 
  {
    res.status(400);
    return res.json({ message: "Incorrect request data" });
  }
  const result = await updateEnrollment( req.body.enrollmentId, req.body.studentId, req.body.tutorId, req.body.subjectId, req.body.enrollmentDate, req.body.comments, req.body.latestScore, req.body.bookingTime );    
  
  res.status(result.status);
  
  return res.json({ data: result.data, message: result.message });
}

// DELETE /protected/enrollment/delete/:enrollmentId
async deleteEnrollment(req, res, next) {

  const result = await deleteEnrollment(req.params.enrollmentId);

  res.status(result.status);

  return res.json({ data: result.data, message: result.message });
}

// GET /general/viewEnrollment
async getViewEnrollment(req, res, next) {

  const result = await getViewEnrollment();

  res.status(result.status);

  return res.json({ data: result.data, message: result.message });
}

// GET /general/viewEnrollment/:userId
async getViewEnrollmentByUserId(req, res, next) {

  const result = await getViewEnrollmentByUserId(req.params.userId);

  res.status(result.status);

  return res.json({ data: result.data, message: result.message });
}

}


export default EnrollmentController;