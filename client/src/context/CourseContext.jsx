

import axios from 'axios';
import { createContext, useReducer } from 'react';


const CourseContext = createContext();
const baseurl = "http://localhost:3001/api/v1/user"

const initialState = {
    
    courses :[],
    buyedcourse: [],
}

const courseReducer = async (state, action) => {
    switch(action.type) {
        case 'courses':
            try {
                console.log("action dispatched")
                const res = await axios.get(`${baseurl}/courses`);

                const data = res.data.data.courses
                console.log(data);
                return { ...state, course: data}
            } catch (err) {
                console.log(err);
            }
        case 'buycourse':
            try {
                const {id} = action.payload;
                const res = await axios.post(`${baseurl}/courses/:${id}`);

            } catch (err) {
                console.log(err);
            }
            case 'allbuyedcourse':
                try {
                    const res = await axios.get(`${baseurl}/buyedcourse`)
                    return { ...state, buyedcourse: res.data}
            } catch (err) {
                console.log(err);
            }
        default: 
            return new Error("Action type is not valid")
    }
}

const CourseProvider = ({children}) => {
    const [{course},dispatch] = useReducer(courseReducer, initialState);

    return (
        <CourseContext.Provider value={{course,dispatch}}>
            {children}
        </CourseContext.Provider>
    )
}


export { CourseContext, CourseProvider };

