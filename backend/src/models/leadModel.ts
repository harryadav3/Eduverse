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
  public imageUrl!: string;

  public async comparePassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
  }
}

Lead.init({
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
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('Accept', 'Reject', 'Waitlist'),
    allowNull: false,
    defaultValue: 'Waitlist'
  },
}, {
  tableName: 'Lead',
  sequelize,
  hooks: {
    beforeCreate: async (lead) => {
      if (lead.password) {
        const salt = await bcrypt.genSalt(10);
        lead.password = await bcrypt.hash(lead.password, salt);
      }
    },
  },
});

export default Lead;