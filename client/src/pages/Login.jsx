import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext";

function Login() {

    const [ data , setData ] = useState({ email:'', password:''});
    const authContext = useContext(AuthContext);

    function handleChange(e) {
        const { name, value} = e.target;
        setData((prev) => ({ ...prev, [name] : value}));
    }

    function handleSubmit(e) {
        e.preventDefault;

        authContext.dispatch({
            type: 'login',
            payload: {
                data
            }
        })
    }
    return (
        <div>
            <input type="email" placeholder="email" name="email" value={data.email} onChange={handleChange}/>
            <input type="password" placeholder="password" name="password" value={data.password} onChange={handleChange}/>

            <button onSubmit={handleSubmit}>Login</button>

        </div>
    )
}

export default Login
