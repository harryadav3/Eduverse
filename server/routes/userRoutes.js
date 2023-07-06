const express = require('express');


const userController = require('./../controllers/userController');
const authController = require('./../controllers/authController');

const router = express.Router();

router.get('/courses',authController.verifyToken,userController.getAllCourses);

router.post('/courses/:courseId',authController.verifyToken,  userController.buyCourse);

router.get('/buyedcourse',authController.verifyToken, userController.getBuyedCourse);

module.exports = router;

