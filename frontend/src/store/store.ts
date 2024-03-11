import {create} from 'zustand'
import api from './api';
import toast from 'react-hot-toast';
// import { useNavigate } from 'react-router-dom';
//   import axios from 'axios';
  // const navigate = useNavigate();
interface AuthState {
  user: {
    id: number;
    email: string;
    name: string;
    imageUrl: string;
    role: string;
  } | null;

  token: string | null;
  isLoggedIn: boolean;

  login: (user: { id: number, email: string, name: string, role: string }, token: string) => void; 

  logout: () => void;

  signup: (user: { id: number, email: string, name: string, role: string, bio?: string, password: string, imageUrl: string }) => void;

}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: localStorage.getItem('token'),
  isLoggedIn: localStorage.getItem('token') !== null,

  // ...

  login: async (userData) => {
    try {
      const response = await api.post('/auth/login', userData);
      const { user, token } = response.data as { user: any, token: string };

      console.log("User and token from the server ", user, token)
      localStorage.setItem('token', token);
      set({ user, token , isLoggedIn : true});
      
      toast.success('Logged in successfully', { style : { backgroundColor : "#629c49" , color : "white"} });

      // navigate("/home")
    } catch (error) {
      toast.error('Invalid credentials' , { style : { backgroundColor : "#e34530" , color : "white"} });
      console.error(error);
    }
  },
  logout: () => {
    console.log(("isnide logoout "))
    localStorage.removeItem('token');
    set({ user: null, token: null, isLoggedIn: false });
    toast.success('Logged out successfully', { style : { backgroundColor : "#629c49" , color : "white"} });
  },
  signup: async (userData) => {
    try {
      let response;

      if (userData.role === 'instructor') {
        const { id, role, ...userDataWithoutIdAndRole } = userData;
        response = await api.post('auth/register/instructor', userDataWithoutIdAndRole);
      } else if (userData.role === 'student') {
        const { id, role, bio, ...userDataWithoutIdAndRoleBio } = userData;
        response = await api.post('auth/register/lead', userDataWithoutIdAndRoleBio);
      }

      if (response) {
        console.log("Response from the server ", response.data)
        const { user, token } = response.data as { user: any, token: string };
        console.log("User and token from the server ", user, token)
        set({ user, token, isLoggedIn: true });
        localStorage.setItem('token', token);
        toast.success('Signed up successfully', { style : { backgroundColor : "#629c49" , color : "white"} });
       
        
       
      }
    } catch (error) {
      toast.error('Invalid credentials' , { style : { backgroundColor : "#e34530" , color : "white"} });
      console.log(error);

    }
  },
}));



interface Course {
  id: number;
  name: string;
  maxSeats: number;
  duration: string;
  category: string;
  image: string;
  instructorid: number;
}

interface CourseState {
  courses: Course[];
  buyedCourses: Course[];
  setCourses: (courses: Course[]) => void;
  setBuyedCourses: (courses: Course[]) => void;
}


export const useCourseStore = create<CourseState>((set) => ({
  courses: [],
  buyedCourses:[],
  setCourses: (courses) => set({ courses }),
  setBuyedCourses : (buyedCourses) => set({buyedCourses})
}));



/*Buyed Course  */


