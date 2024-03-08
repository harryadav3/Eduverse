import { DataTypes } from 'sequelize';
import sequelize from '../config';
import Course from './courseModel';

const Lead = sequelize.define('Lead', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    linkedInProfile: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    courseId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Course,
            key: 'id',
        },
    },
}, {
    timestamps: true,
});

Course.hasMany(Lead, { foreignKey: 'courseId' });
Lead.belongsTo(Course, { foreignKey: 'courseId' });

export default Lead;