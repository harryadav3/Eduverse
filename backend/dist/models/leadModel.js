"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../config"));
const bcrypt_1 = __importDefault(require("bcrypt"));
class Lead extends sequelize_1.Model {
    comparePassword(password) {
        return __awaiter(this, void 0, void 0, function* () {
            return bcrypt_1.default.compare(password, this.password);
        });
    }
}
Lead.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    imageUrl: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: sequelize_1.DataTypes.ENUM('Accept', 'Reject', 'Waitlist'),
        allowNull: false,
        defaultValue: 'Waitlist'
    },
}, {
    tableName: 'Lead',
    sequelize: config_1.default,
    hooks: {
        beforeCreate: (lead) => __awaiter(void 0, void 0, void 0, function* () {
            if (lead.password) {
                const salt = yield bcrypt_1.default.genSalt(10);
                lead.password = yield bcrypt_1.default.hash(lead.password, salt);
            }
        }),
    },
});
exports.default = Lead;
