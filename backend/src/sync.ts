import Instructor from './models/instructorModel';
import Course from './models/courseModel';
import Lead from './models/leadModel';
import Comment from './models/commentModel';
import CourseRegistration from './models/courseRegistration';
import sequelize from './config';

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





export const syncModels = async () => {
    try {
        await Instructor.sync();
        await Course.sync();
        await CourseRegistration.sync();
        await Lead.sync();
        await Comment.sync();
        console.log('Models synced successfully!');
    } catch (error) {
        console.error('Error syncing models:', error);
    }
};





syncModels();