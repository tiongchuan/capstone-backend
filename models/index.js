// Import sequelize
import Sequelize from "sequelize";

// Import model(s)
import schoolModel from './school.model.js'
import subjectModel from './subject.model.js' 
import tutorModel from './tutor.model.js'
import studentModel from './student.model.js'
import enrollmentModel from './enrollment.model.js'
import userModel from "./user.model.js"
import viewEnrollmentModel from "./viewEnrollment.model.js"
import viewTutorModel from "./viewTutor.model.js";
import viewStudentModel from "./viewStudent.model.js";

//Heroku DB Connection Configuration
// const sequelize = new Sequelize("d6ssqv6hf7qldc", "rwxbhhdsdaevnd", "27842a83c6ad07b613d334a6a42a9093cd976ae0938c72292e3a96fc6d97b54f", {
//   host: "ec2-34-199-68-114.compute-1.amazonaws.com",
//   dialect: "postgres",
//   dialectOptions: {
//     ssl: {
//       rejectUnauthorized: false
//     }
//   }
// });

const sequelize = new Sequelize("capstone", "postgres", "abcd5566", {
  host: "localhost",
  dialect: "postgres"
});

// // Local DB Connection
// const sequelize = new Sequelize("student_db", "postgres", "N0op@psql", {
//   host: "localhost",
//   dialect: "postgres",
// });


// Test connection function
async function testConnection() {
    try {

      await sequelize.authenticate()
      console.log("Connection has been established successfully.");

      // // Drop all tables
      // await sequelize.drop();
      // console.log("All tables dropped!");

      // // Synchronizing all models at once
      // await sequelize.sync();
      // console.log("All models were synchronized successfully.");

      return true;

    } catch (error) {
      console.error("Unable to connect to the database:", error);
      return false;
    }
  }

const School = schoolModel(sequelize);
const Subject = subjectModel(sequelize);
const Tutor = tutorModel(sequelize);
const Student = studentModel(sequelize);
const Enrollment = enrollmentModel(sequelize);
const User = userModel(sequelize);
const viewEnrollment = viewEnrollmentModel(sequelize);
const viewTutor = viewTutorModel(sequelize);
const viewStudent = viewStudentModel(sequelize);

// Student.belongsTo(User, {foreignKey: "userId"});
// Student.belongsTo(School, {foreignKey: "schoolId"});
// Tutor.belongsTo(User, {foreignKey: "userId"});
// Tutor.belongsTo(Subject, {foreignKey: "subjectId"});
// Enrollment.belongsTo(Student, {foreignKey: "studentId"});
// Enrollment.belongsTo(Tutor, {foreignKey: "tutorId"});
// Enrollment.belongsTo(Subject, {foreignKey: "subjectId"});

// Student.hasMany(Enrollment, {foreignKey: "studentId"});
// Subject.hasMany(Enrollment, {foreignKey: "subjectId"});


export {
  sequelize,
  testConnection,
  School,
  Subject,
  Tutor,
  Student,
  Enrollment,
  User,
  viewEnrollment,
  viewTutor,
  viewStudent
};

