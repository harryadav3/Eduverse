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
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    courseId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    leadId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM('Accept', 'Reject', 'Waitlist'),
        allowNull: false,
        defaultValue: 'Waitlist'
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