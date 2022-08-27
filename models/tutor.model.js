import { DataTypes, Model } from "sequelize";

export default function (sequelize) {

    class tutorModel extends Model {}

    tutorModel.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            subjectId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                field: "subject_id",
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                field: "name",
            },
            experience: {
                type: DataTypes.INTEGER,
                allowNull: false,
                field: "experience",
            },
            highestEducation: {
                type: DataTypes.STRING,
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
                type: DataTypes.TEXT,
                allowNull: false,
                field: "testimony",
            },
        },
        {
            sequelize,
            timestamps: false,
            modelName: "Tutor",
            tableName: "tutors",
        }
    );

    return tutorModel;    
};