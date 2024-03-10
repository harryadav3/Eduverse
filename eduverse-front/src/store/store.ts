import {create} from 'zustand'
import api from './api';
import { useNavigate } from 'react-router-dom';
  import axios from 'axios';


  // const navigate = useNavigate();
interface AuthState {
  user: {
    id: number;
    email: string;
    name: string;
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
      // navigate("/home")
    } catch (error) {
      console.error(error);
    }
  },
  logout: () => {
    console.log(("isnide logoout "))
    localStorage.removeItem('token');
    set({ user: null, token: null, isLoggedIn: false });
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
      }
    } catch (error) {
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
  setCourses: (courses: Course[]) => void;
}


export const useCourseStore = create<CourseState>((set) => ({
  courses: [],
  setCourses: (courses) => set({ courses }),
}));






