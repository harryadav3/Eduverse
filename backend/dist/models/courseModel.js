"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../config"));
const instructorModel_1 = __importDefault(require("./instructorModel"));
class Course extends sequelize_1.Model {
}
Course.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    maxSeats: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    startDate: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    instructorId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    duration: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    category: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    imageUrl: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
}, {
    tableName: 'Course',
    sequelize: config_1.default,
});
instructorModel_1.default.hasMany(Course, { foreignKey: 'instructorId' });
Course.belongsTo(instructorModel_1.default, { foreignKey: 'instructorId' });
exports.default = Course;
