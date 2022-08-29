import { DataTypes, Model } from "sequelize";

export default function (sequelize) {

    class enrollmentModel extends Model {}

    enrollmentModel.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            studentId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                field: "student_id",
            },
            tutorId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                field: "tutor_id",
            },
            subjectId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                field: "subject_id",
            },
            enrollmentDate: {
                type: DataTypes.DATEONLY,
                allowNull: false,
                field: "enrollment_date",
            },
            comments: {
                type: DataTypes.TEXT(200),
                allowNull: false,
                field: "comments",
            },
            latestScore: {
                type: DataTypes.INTEGER,
                allowNull: false,
                field: "latest_score",
            },
            bookingTime: {
                type: DataTypes.STRING,
                allowNull: false,
                field: "booking_time"
            }
        
        },
        {
            sequelize,
            timestamps: true,
            modelName: "Enrollment",
            tableName: "enrollments",
        }
    );

    return enrollmentModel;    
};