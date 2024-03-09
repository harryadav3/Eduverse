import { Model, DataTypes } from 'sequelize';
import sequelize from '../config';

class CourseRegistration extends Model {
    public id!: number;
    public courseId!: number;
    public leadId!: number;
    public status!: string;
    public registrationDate!: Date;
}

CourseRegistration.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    courseId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    },
    leadId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Pending',
    },
    registrationDate: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
}, {
    tableName: 'CourseRegistration',
    sequelize,
});

export default CourseRegistration;