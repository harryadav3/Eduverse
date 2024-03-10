"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../config"));
const leadModel_1 = __importDefault(require("./leadModel"));
class Comment extends sequelize_1.Model {
}
Comment.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    comment: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    leadId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    instructorId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    tableName: 'Comment',
    sequelize: config_1.default,
});
leadModel_1.default.hasMany(Comment, { foreignKey: 'leadId' });
Comment.belongsTo(leadModel_1.default, { foreignKey: 'leadId' });
exports.default = Comment;
