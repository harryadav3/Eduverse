import { DataTypes } from 'sequelize';
import sequelize from '../config';
import Lead from './leadModel';

const Comment = sequelize.define('Comment', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    comment: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    leadId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Lead,
            key: 'id',
        },
    },
}, {
    timestamps: true,
});

Lead.hasMany(Comment, { foreignKey: 'leadId' });
Comment.belongsTo(Lead, { foreignKey: 'leadId' });

export default Comment;