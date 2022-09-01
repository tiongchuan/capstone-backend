import { DataTypes, Model } from "sequelize";

export default function (sequelize) {

    class studentModel extends Model {}

    studentModel.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                field: "user_id",
            },
            schoolId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                field: "school_id",
            },
            name: {
                type: DataTypes.STRING(20),
                allowNull: false,
                field: "name",
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
        },
        {
            sequelize,
            timestamps: false,
            modelName: "Student",
            tableName: "students",
        }
    );

    return studentModel;    
};