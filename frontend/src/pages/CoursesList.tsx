import CourseCard from '../components/CourseCard';
import {useEffect, useState} from 'react';
import api from '../store/api';
import {useCourseStore} from '../store/store';
import Loading from '../components/Loading';

interface Course {
  id: number;
  name: string;
  maxSeats: number;
  duration: string;
  category: string;
  imageUrl: string;
  instructorid: number;
}

const CoursesList = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const storeCourses = useCourseStore((state) => state.setCourses);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await api.get('/courses');
        setCourses(response.data);
        storeCourses(response.data);
        setIsLoading(false);
      } catch (error) {
        setError('Error fetching courses');
        setIsLoading(false);
      }
    };

    fetchCourses();
  }, [storeCourses]);

  if (isLoading) {
   return <Loading/>
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {courses.map((course) => (
          // @ts-ignore
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CoursesList;