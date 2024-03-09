import React from 'react'
import CourseCard from '../components/CourseCard'
import { courses } from './../data/courses'

const Courses = () => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                {courses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>
        </div>
    )
}

export default Courses