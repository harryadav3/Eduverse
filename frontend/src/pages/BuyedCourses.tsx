import {useEffect} from 'react';
import CourseCard from '../components/CourseCard';
import { useCourseStore , useAuthStore } from '../store/store';
import api from '../store/api';




const BuyedCourses = () => {
    const buyedCourses = useCourseStore((state) => state.buyedCourses);
    const setBuyedCourses = useCourseStore((state) => state.setBuyedCourses);
    const { user } = useAuthStore((state) => state);

    useEffect(() => {
        if (buyedCourses === null) {
            return;
        }

        console.log("this is form buyed coures ", user?.id)
        const fetchBuyedCourses = async () => {
            try {
                const response = await api.get(`/leads/${user?.id}` );
                setBuyedCourses(response.data);
            } catch (error) {
                console.error('Error fetching bought courses', error);
            }
        };

        fetchBuyedCourses();
    }, []);

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div><h1 className='text-3xl font-bold text-gray-700 text-center my-6'>{user?.name}, Courses </h1></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                {buyedCourses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>
        </div>
    );
};

export default BuyedCourses;