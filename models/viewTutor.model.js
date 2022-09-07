import { DataTypes, Model } from "sequelize";

export default function (sequelize) {

    class viewTutorModel extends Model {}

    viewTutorModel.init(
        {
            tutorId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                field: "tutor_id",
            },
            tutorName: {
                type: DataTypes.STRING(50),
                allowNull: false,
                field: "tutor",
            },
            experience: {
                type: DataTypes.INTEGER,
                allowNull: false,
                field: "experience",
            },
            highestEducation: {
                type: DataTypes.STRING(50),
                allowNull: false,
                field: "highest_education",
            },
            hourlyRate: {
                type: DataTypes.FLOAT,
                allowNull: false,
                field: "hourly_rate",
            },
            rating: {
                type: DataTypes.FLOAT,
                allowNull: false,
                field: "rating",
            },
            testimony: {
                type: DataTypes.TEXT(500),
                allowNull: false,
                field: "testimony",
            },
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                field: "user_id",
            },
            username: {
                type: DataTypes.STRING(50),
                allowNull: false,
                field: "username"
            },
            email: {
                type: DataTypes.STRING(50),
                allowNull: false,
                field: "email"
            },
            subjectId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                field: "subject_id",
            },
            subject: {
                type: DataTypes.STRING(50),
                allowNull: false,
                field: "subject",
            },
            description: {
                type: DataTypes.TEXT(500),
                allowNull: false,
                field: "description",
            },
        },
        {
            sequelize,
            timestamps: false,
            modelName: "viewTutor",
            tableName: "viewtutor",
        }
    );

    return viewTutorModel;    
};