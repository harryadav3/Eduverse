import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import BuyedCourses from './pages/BuyedCourses';
import CoursesList from './pages/CoursesList';
import CreateCourse from './pages/CreateCourse';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Taskbar from './components/Taskbar';
import HomePage from './pages/HomePage';
import { Toaster } from 'react-hot-toast';



function App() {
  return (
    <Router>
      <Toaster/>
      <Taskbar /> {/* Taskbar will be displayed on all pages */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/buyed-courses" element={<BuyedCourses />} />
        <Route path="/courses" element={<CoursesList />} />
        <Route path="/create-course" element={<CreateCourse />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;