import { Router } from 'express';
import { isAuth } from '../services/isAuth.services.js'
import TutorController from "../controllers/tutor.controller.js";
import SubjectController from '../controllers/subject.controller.js';
import EnrollmentController from '../controllers/enrollment.controller.js';
import StudentController from "../controllers/student.controller.js";
import UserController from "../controllers/user.controller.js";
import SchoolController from '../controllers/school.controller.js';

const router = Router();

router.get("/protected", (req, res) => {
    return res.send("You have called a protected route");
});

// Instantiate the class
const tutorController = new TutorController();
const subjectController = new SubjectController();
const studentController = new StudentController();
const enrollmentController = new EnrollmentController();
const userController = new UserController();
const schoolController = new SchoolController();

// Invoke update() in TutorController based on the route
// router.post("/protected/tutor/update", isAuth, tutorController.update);
// router.post("/protected/subject/update", isAuth, subjectController.update);
router.post("/protected/tutor/update", tutorController.update);
router.post("/protected/subject/update", subjectController.update);
router.post("/protected/student/update", studentController.update);
router.post("/protected/enrollment/update", enrollmentController.updateEnrollment);
router.post("/protected/school/update", schoolController.update);

// Invoke updateProfile_img() in UserController based on the route by passing in the userId
router.post("/protected/user/updateProfile_img/:userId", userController.updateProfile_img);

// Invoke delete() in TutorController based on the route
// router.delete("/protected/tutor/delete/:tutorId", isAuth, tutorController.delete);
// router.delete("/protected/subject/delete/:subjectId", isAuth, subjectController.delete);
router.delete("/protected/tutor/delete/:tutorId", tutorController.delete);
router.delete("/protected/subject/delete/:subjectId", subjectController.delete);
router.delete("/protected/student/delete/:studentId", studentController.delete);
router.delete("/protected/enrollment/delete/:enrollmentId", enrollmentController.deleteEnrollment);
router.delete("/protected/school/delete/:schoolId", schoolController.delete);

// Invoke add() in TutorController based on the route
// router.put("/protected/tutor/add", isAuth, tutorController.add);
// router.put('/protected/subject/add', isAuth, subjectController.add)
router.put("/protected/tutor/add", tutorController.add);
router.put('/protected/subject/add', subjectController.add);
router.put("/protected/student/add", studentController.add);
router.put("/protected/enrollment/add", enrollmentController.createEnrollment);
router.put("/protected/school/add", schoolController.add);



export default router;