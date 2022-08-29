
import { DataTypes, Model } from "sequelize";

export default function (sequelize) {

    class viewEnrollmentModel extends Model {}

    viewEnrollmentModel.init(
        {
            studentId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                field: "id",
            },
            studentName: {
                type: DataTypes.STRING(20),
                allowNull: false,
                field: "student",
            },
            parentName: {
                type: DataTypes.STRING(20),
                allowNull: false,
                field: "parent",
            },
            remarks: {
                type: DataTypes.STRING(200),
                allowNull: false,
                field: "remarks",
            },
            schoolId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                field: "school_id",
            },
            subject: {
                type: DataTypes.STRING(20),
                allowNull: false,
                field: "subject",
            },
            description: {
                type: DataTypes.TEXT(200),
                allowNull: false,
                field: "description",
            },
            comments: {
                type: DataTypes.TEXT(200),
                allowNull: false,
                field: "comments",
            },
            latestScore: {
                type: DataTypes.STRING(10),
                allowNull: false,
                field: "latest_score",
            },
            enrollmentDate: {
                type: DataTypes.DATEONLY,
                allowNull: false,
                field: "enrollment_date",
            },
            tutor: {
                type: DataTypes.STRING(20),
                allowNull: false,
                field: "tutor",
            },
        },
        {
            sequelize,
            timestamps: false,
            modelName: "vieweErollment",
            tableName: "viewenrollment",
        }
    );

    return viewEnrollmentModel;    
};