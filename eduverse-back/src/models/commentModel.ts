import { Model, DataTypes } from 'sequelize';
import sequelize from '../config';
import Lead from './leadModel';

class Comment extends Model {
    public id!: number;
    public comment!: string;
    public leadId!: number;
}
Comment.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    comment: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    leadId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    },
    instructorId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    },
}, {
    tableName: 'Comment',
    sequelize,
});

Lead.hasMany(Comment, { foreignKey: 'leadId' });
Comment.belongsTo(Lead, { foreignKey: 'leadId' });

export default Comment;