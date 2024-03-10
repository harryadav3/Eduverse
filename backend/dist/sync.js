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
exports.syncModels = void 0;
const instructorModel_1 = __importDefault(require("./models/instructorModel"));
const courseModel_1 = __importDefault(require("./models/courseModel"));
const leadModel_1 = __importDefault(require("./models/leadModel"));
const commentModel_1 = __importDefault(require("./models/commentModel"));
const courseRegistration_1 = __importDefault(require("./models/courseRegistration"));
// export const syncModels = async () => {
//     try {
//         // Drop all tables and their associated schemas
//         await sequelize.drop();
//         // Define and synchronize the models
//         await Instructor.sync({ force: true });
//         await Course.sync({ force: true });
//         await Lead.sync({ force: true });
//         await Comment.sync({ force: true });
//         await CourseRegistration.sync({ force: true });
//         console.log('Models synced successfully!');
//     } catch (error) {
//         console.error('Error syncing models:', error);
//     } 
// };
const syncModels = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield instructorModel_1.default.sync();
        yield courseModel_1.default.sync();
        yield courseRegistration_1.default.sync();
        yield leadModel_1.default.sync();
        yield commentModel_1.default.sync();
        console.log('Models synced successfully!');
    }
    catch (error) {
        console.error('Error syncing models:', error);
    }
});
exports.syncModels = syncModels;
(0, exports.syncModels)();
