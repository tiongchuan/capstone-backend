
import { Router } from 'express';
import TutorController from "../controllers/tutor.controller.js";
import SubjectController from '../controllers/subject.controller.js';
import EnrollmentController from '../controllers/enrollment.controller.js';
import StudentController from '../controllers/student.controller.js';
import UserController from '../controllers/user.controller.js';


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

// Invoke retrieveTutor() in TutorController based on the route
router.get("/general/tutor/:tutorId", tutorController.retrieveTutor);
router.get("/general/subject/:subjectId", subjectController.retrieveSubject);
router.get("/general/student/:studentId", studentController.retrieveStudent);
router.get("/general/enrollment/:enrollmentId", enrollmentController.retrieveEnrollment);
router.get("/general/user/:userId", userController.retrieveUser);
router.get("/general/user/username/:userId", userController.retrieveUsername);

// Invoke retrieveTutors() in TutorController based on the route
router.get("/general/tutors", tutorController.retrieveTutors);
router.get('/general/subjects', subjectController.retrieveSubjects)
router.get("/general/students", studentController.retrieveStudents);
router.get("/general/enrollments", enrollmentController.retrieveEnrollments);


// router.get("/general/class", enrollmentController.studentInSubject);
// router.get("/general/tutor", enrollmentController.studentToTutor);
router.get("/general/viewEnrollment", enrollmentController.getViewEnrollment);

export default router;

