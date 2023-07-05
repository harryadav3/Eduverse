const express = require('express');


const adminController = require('./../controllers/adminController');
const authController = require('./../controllers/authController');

const router = express.Router();

router.post('/createCourse',adminController.createCourse);

router.post('/updateCourse/:courseId',adminController.updateCourse);

router.get('/courses', adminController.getAllCourses);

router.delete('/delete/:id', adminController.deleteCourse);

router.get('/getcourse/:id', adminController.getCourse);


module.exports = router;