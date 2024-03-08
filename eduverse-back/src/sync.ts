import Instructor from './models/instructorModel';
import Course from './models/courseModel';
import Lead from './models/leadModel';
import Comment from './models/commentModel';


export const syncModels = async () => {
  try {
    await Instructor.sync({ force: true });
    await Course.sync({ force: true });
    await Lead.sync({ force: true });
    await Comment.sync({ force: true });
    console.log('Models synced successfully!');
  } catch (error) {
    console.error('Error syncing models:', error);
  }
};


syncModels();