import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext";

function Login() {

    const [ data , setData ] = useState({ email:'', password:''});
    const authContext = useContext(AuthContext);

    function handleChange(e) {
        const { name, value} = e.target;
        setData((prev) => ({ ...prev, [name] : value}));
    }

    function handleSubmit() {

        authContext.dispatch({
            type: 'login',
            payload: {
                data
            }
        })

        // authContext.login({
        //     email: data.email,
        // password: data.password})
    }
    return (
        
        <div className="container">
        <div className="form">
            <h3>Already Have Account</h3>
            <input type="email" placeholder="email" name="email" value={data.email} onChange={handleChange}/>
            <input type="password" placeholder="password" name="password" value={data.password} onChange={handleChange}/>

            <button onClick={handleSubmit}>Login</button>
        </div>
        </div>
    )
}

export default Login
