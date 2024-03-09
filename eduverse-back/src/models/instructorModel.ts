import { DataTypes, Model } from 'sequelize';
import sequelize from '../config';
import bcrypt from 'bcrypt';

class Instructor extends Model {
  public readonly id!: number;
  public name!: string;
  public email!: string;
  public password!: string;
  public bio!: string;

  public async comparePassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
  }
}

Instructor.init(
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
    bio: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Instructor',
    hooks: {
      beforeCreate: async (instructor) => {
        if (instructor.password) {
          const salt = await bcrypt.genSalt(10);
          instructor.password = await bcrypt.hash(instructor.password, salt);
        }
      },
    },
  }
);

export default Instructor;