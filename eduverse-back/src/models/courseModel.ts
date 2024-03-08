import { DataTypes } from 'sequelize';
import sequelize from '../config';
import Instructor from './instructorModel';

const Course = sequelize.define('Course', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    maxSeats: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    startDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    instructorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Instructor,
            key: 'id',
        },
    },
}, {
    timestamps: true,
});

Instructor.hasMany(Course, { foreignKey: 'instructorId' });
Course.belongsTo(Instructor, { foreignKey: 'instructorId' });

export default Course;