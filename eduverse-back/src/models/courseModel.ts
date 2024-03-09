import { Model, DataTypes } from 'sequelize';
import sequelize from '../config';
import Instructor from './instructorModel';

class Course extends Model {
    public id!: number;
    public name!: string;
    public maxSeats!: number;
    public startDate!: Date;
    public instructorId!: number;
    public duration!: number; // in hours
    public category!: string;
    public imageUrl!: string;
}

Course.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    maxSeats: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    },
    startDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    instructorId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    },
    duration: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    imageUrl: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    tableName: 'Course',
    sequelize,
});

Instructor.hasMany(Course, { foreignKey: 'instructorId' });
Course.belongsTo(Instructor, { foreignKey: 'instructorId' });

export default Course;