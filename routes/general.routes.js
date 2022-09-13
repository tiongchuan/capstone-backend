
import { Router } from 'express';
import TutorController from "../controllers/tutor.controller.js";
import SubjectController from '../controllers/subject.controller.js';
import EnrollmentController from '../controllers/enrollment.controller.js';
import StudentController from '../controllers/student.controller.js';
import UserController from '../controllers/user.controller.js';
import SchoolController from '../controllers/school.controller.js';


const router = Router();

router.get("/general", (req, res) => {
    return res.send("You have called a general route");
});

// Instantiate the class
const tutorController = new TutorController();
const subjectController = new SubjectController()
const enrollmentController = new EnrollmentController();
const studentController = new StudentController();
const userController = new UserController();
const schoolController = new SchoolController();

// Invoke retrieveTutor() in TutorController based on the route
router.get("/general/tutor/:tutorId", tutorController.retrieveTutor);
router.get("/general/subject/:subjectId", subjectController.retrieveSubject);
router.get("/general/student/:studentId", studentController.retrieveStudent);
router.get("/general/enrollment/:enrollmentId", enrollmentController.retrieveEnrollment);
router.get("/general/user/:userId", userController.retrieveUser);
router.get("/general/school/:schoolId", schoolController.retrieveSchool);

// Invoke retrieveTutors() in TutorController based on the route
router.get("/general/tutors", tutorController.retrieveTutors);
router.get('/general/subjects', subjectController.retrieveSubjects)
router.get("/general/students", studentController.retrieveStudents);
router.get("/general/enrollments", enrollmentController.retrieveEnrollments);
router.get("/general/users", userController.retrieveUsers);
router.get("/general/schools", schoolController.retrieveSchools);

// Invoke getViewEnrollment() in EnrollmentController based on the route
router.get("/general/viewEnrollment", enrollmentController.getViewEnrollment);
router.get("/general/viewEnrollment/:userId", enrollmentController.getViewEnrollmentByUserId);
router.get("/general/viewTutor", tutorController.getViewTutor);
router.get("/general/viewTutor/:userId", tutorController.getViewTutorByUserId);
router.get("/general/viewStudent", studentController.getViewStudent);
router.get("/general/viewStudent/:userId", studentController.getViewStudentByUserId);

// Invoke retrieveProfile_img() in UserController based on the route by passing in the userId
router.get("/general/user/profile_img/:userId", userController.retrieveProfile_img);

export default router;

