
import { Enrollment, viewEnrollment } from "../models/index.js";

async function addEnrollment(userId, tutorId, subjectId, enrollmentDate, comments, latestScore, bookingTime) {
  let result = {
    message: null,
    status: null,
    data: null,
  };
  
  const enrollment = await Enrollment.create({ userId, tutorId, subjectId, enrollmentDate, comments, latestScore, bookingTime });

  result.data = enrollment;
  result.status = 200;
  result.message = "New enrollment is registered sucessfully";
  return result;
}

async function getEnrollment(enrollmentId) {
  let result = {
    message: null,
    status: null,
    data: null,
  };

  const enrollment = await Enrollment.findByPk(enrollmentId);
  
  if (!enrollment) {
    result.message = `Enrollment ID ${enrollmentId} is not found.`;
    result.status = 404;
    return result;
  }
  result.data = enrollment;
  result.status = 200;
  result.message = "Retrieve successful";
  return result;
}

async function getEnrollments() {
  let result = {
    message: null,
    status: null,
    data: null,
  };
  const enrollments = await Enrollment.findAll();
  result.data = enrollments;
  result.status = 200;
  result.message = "Retrieve successful";
  return result;
}

async function updateEnrollment(enrollmentId, userId, tutorId, subjectId, enrollmentDate, comments, latestScore, bookingTime) {

  let result = {
    message: null,
    status: null,
    data: null,
  };

  const enrollment = await Enrollment.findByPk(enrollmentId);

  if (!enrollment) {
    result.message = `Enrollment ID ${enrollmentId} is not found.`;
    result.status = 404;
    return result;
  }
 
  enrollment.userId = userId;
  enrollment.tutorId = tutorId;
  enrollment.subjectId = subjectId;
  enrollment.enrollmentDate = enrollmentDate;
  enrollment.comments = comments;
  enrollment.latestScore = latestScore;
  enrollment.bookingTime = bookingTime;
 

  await enrollment.save();
  result.data = enrollment;
  result.status = 200;
  result.message = "Update successful";
  return result;
}


async function deleteEnrollment(enrollmentId) {
  let result = {
    message: null,
    status: null,
    data: null,
  };
  const enrollment = await Enrollment.findByPk(enrollmentId);
  if (!enrollment) {
    result.message = `Enrollment ID ${enrollmentId} is not found.`;
    result.status = 404;
    return result;
  }
  await enrollment.destroy();
  result.data = enrollment;
  result.status = 200;
  result.message = "Delete successful";
  return result;
}

async function getViewEnrollment() {
  let result = {
    message: null,
    status: null,
    data: null,
  };

  const enrollmentView = await viewEnrollment.findAll();

  result.data = enrollmentView;
  result.status = 200;
  result.message = `Retrieve successful`;
  return result
}

async function getViewEnrollmentByUserId(userId) {

  let result = {
      message: null,
      status: null,
      data: null,
  };

  const enrollmentView = await viewEnrollment.findAll({
      where: {
        userId: userId
      }
    });

  result.data = enrollmentView;
  result.status = 200;
  result.message = `Retrieve successful`;

  return result
}

export {
  addEnrollment,
  getEnrollment,
  getEnrollments,
  updateEnrollment,
  deleteEnrollment,
  getViewEnrollment,
  getViewEnrollmentByUserId
}



