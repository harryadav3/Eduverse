import { createContext, useReducer } from "react";
import BASE_URL from "../hooks/useBaseUrl";
import axios from 'axios';

const baseurl = "http://localhost:3001/api/v1"

const AuthContext = createContext();

const initialState = {
    name: '',
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
                const {token} = response.data;
                localStorage.setItem('jwttoken',token);
                console.log(response);
                console.log(response.data.data.name);
                return { name: response.data.data.name, userRole: data.Role, isAuthenticated: true}

            } catch (err) {
                console.log(err)
                
            }
        case 'login' : 
            try {
                console.log(action.payload.data);
                const response = await axios.post('http://localhost:3001/api/v1/login', action.payload.data);
                console.log(response);
                console.log(response.data.data.user.name);
                 return { ...state, name: response.data.data.name,userRole: response.data.data.Role, isAuthenticated: true}

            
            } catch (err) {
                console.log(err);
            }

        default: 
            return new Error( "action type is not valid");
    }
}


const AuthProvider = ({children}) => {
    const [ {name,userRole,isAuthenticated}, dispatch] = useReducer(authReducer, initialState);

    return (
        <AuthContext.Provider value={{name, userRole,isAuthenticated, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}


export  { AuthContext, AuthProvider};