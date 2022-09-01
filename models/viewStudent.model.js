import { DataTypes, Model } from "sequelize";

export default function (sequelize) {

    class viewStudentModel extends Model {}

    viewStudentModel.init(
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
            parent: {
                type: DataTypes.STRING(20),
                allowNull: false,
                field: "parent",
            },
            remarks: {
                type: DataTypes.TEXT(200),
                allowNull: false,
                field: "remarks",
            },
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                field: "user_id",
              },
            username: {
                type: DataTypes.STRING(50),
                allowNull: false,
                unique: true,
                field: "username"
            },
            schoolId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                field: "school_id",
            },
            school: {
                type: DataTypes.STRING(50),
                allowNull: false,
                field: "school",
            },
            area: {
                type: DataTypes.STRING(50),
                allowNull: false,
                field: "area",
            },

        },
        {
            sequelize,
            timestamps: false,
            modelName: "viewStudent",
            tableName: "viewstudent",
        }
    );

    return viewStudentModel;    
};