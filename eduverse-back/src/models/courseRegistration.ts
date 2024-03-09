import { DataTypes } from 'sequelize';
import  sequelize  from '../config';

const CourseRegistration = sequelize.define('CourseRegistration', {
    courseId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    leadId: {
        type: DataTypes.INTEGER,
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
});

export default CourseRegistration;