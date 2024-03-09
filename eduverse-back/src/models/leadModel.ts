import { DataTypes, Model } from 'sequelize';
import sequelize from '../config';
import bcrypt from 'bcrypt';

class Lead extends Model {
  public readonly id!: number;
  public name!: string;
  public email!: string;
  public password!: string;
  public phoneNumber!: string;
  public linkedInProfile!: string;
  public status!: string;
  public courseId!: number;

  public async comparePassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
  }
}

Lead.init(
  {
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
    password: {
      type: DataTypes.STRING,
      allowNull: false,
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
        model: 'Course',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    modelName: 'Lead',
    hooks: {
      beforeCreate: async (lead) => {
        if (lead.password) {
          const salt = await bcrypt.genSalt(10);
          lead.password = await bcrypt.hash(lead.password, salt);
        }
      },
    },
  }
);

export default Lead;