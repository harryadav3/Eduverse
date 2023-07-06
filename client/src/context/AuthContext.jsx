import { createContext, useReducer } from "react";
import BASE_URL from "../hooks/useBaseUrl";
import axios from 'axios';

const baseurl = "http://localhost:3001/api/v1"

const AuthContext = createContext();

const initialState = {
   userRole: '',
   isAuthenticated: false,
};

const authReducer = async (state, action) => {
    switch(action.type) {
        case 'signup': 
            try {
                console.log(action.payload);
                const response = await axios.post('http://localhost:3001/api/v1/signup',action.payload);
                const data = response.json();

                return { ...state, userRole: data.Role, isAuthenticated: true}

            } catch (err) {
                console.log(err)
                
            }
        case 'login' : 
            try {

                const resonse = await axios.post(`${BASE_URL}/login`, action.payload);
                const data = response.json();
                return { ...state, userRole: data.Role, isAuthenticated: true}

            } catch (err) {
                console.log(err);
            }

        default: 
            return new Error( "action type is not valid");
    }
}


const AuthProvider = ({children}) => {
    const [ {userRole,isAuthenticated}, dispatch] = useReducer(authReducer, initialState);

    return (
        <AuthContext.Provider value={{ userRole,isAuthenticated, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}


export  { AuthContext, AuthProvider};