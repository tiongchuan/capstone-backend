# capstone-backend

https://quiet-river-74601.herokuapp.com 

1. Endpoints for Users
- POST /register
- POST /login
- GET /general/user/:userId
- GET /general/users

2. Endpoints for Tutors
- GET /general/tutor/:tutorId
- GET /general/tutors
- POST /protected/tutor/update
- DELETE /protected/tutor/delete/:tutorId
- PUT /protected/tutor/add

3. Endpoints for Students
- GET /general/student/:studentId
- GET /general/students
- POST /protected/student/update
- DELETE /protected/student/delete/:studentId
- PUT /protected/student/add

4. Endpoints for Subjects
- GET /general/subject/:subjectId
- GET /general/subjects
- POST /protected/subject/update
- DELETE /protected/tutor/delete/:subjectId
- PUT /protected/subject/add

5. Endpoints for Enrollments
- GET /general/enrollment/:enrollmentId
- GET /general/enrollments
- POST /protected/enrollment/update
- DELETE /protected/enrollment/delete/:enrollmentId
- PUT /protectedl/enrollment/add

6. Endpoints for viewTables
- GET /general/viewStudent
- GET /general/viewTutor
- GET /general/viewEnrollment

7. Adding constraints into tables
- alter table "students" add constraint fk_user_id foreign key (user_id) references users(id);
- alter table "students" add constraint fk_school_id foreign key (school_id) references schools(id);
- alter table "tutors" add constraint fk_user_id foreign key (user_id) references users(id);
- alter table "tutors" add constraint fk_subject_id foreign key (subject_id) references subjects(id);
- alter table "enrollments" add constraint fk_student_id foreign key (student_id) references students(id);
- alter table "enrollments" add constraint fk_tutor_id foreign key (tutor_id) references tutors(id);
- alter table "enrollments" add constraint fk_subject_id foreign key (subject_id) references subjects(id);

8. Creating view tables

CREATE VIEW viewEnrollment AS
SELECT e.id AS id,
	s.name AS "student", s.parent, s.remarks, s.school_id,
	sub.name AS "subject", sub.description,
	e.comments, e.latest_score, e.enrollment_date,
	t.name AS "tutor"
FROM enrollments e 
	LEFT JOIN students s ON e.student_id = s.id
	LEFT JOIN subjects sub on e.subject_id = sub.id
	LEFT JOIN tutors t on e.tutor_id = t.id


CREATE VIEW viewTutor AS
SELECT t.id AS id,
	t.name AS "tutor", t.experience, t.highest_education, t.hourly_rate, t.rating, t.testimony,
	u.id AS "user_id", u.username,
	sub.id AS "subject_id", sub.name AS "subject", sub.description
FROM tutors t 
	LEFT JOIN users u ON t.user_id = u.id
	LEFT JOIN subjects sub on t.subject_id = sub.id


CREATE VIEW viewStudent AS
SELECT s.id AS id,
	s.name AS "student", s.parent, s.remarks,
	u.id AS "user_id", u.username,
	sch.id AS "school_id", sch.name AS "school", sch.area
FROM students s 
	LEFT JOIN users u ON s.user_id = u.id
	LEFT JOIN schools sch on s.school_id = sch.id
