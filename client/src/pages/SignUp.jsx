import { useContext , useState} from "react"
import {AuthContext} from "../context/AuthContext";

function SignUp() {

    const [data , setData ] = useState({
        name:'',
        email:'',
        password: '',
        passwordConfirm: '',
        role: 'user'
    })
    const authContext = useContext(AuthContext)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData( (prev) => ({ ...prev, [name]: value}));
    };

    const handleSubmit = () => {
        authContext.dispatch({
            type: 'signup',
            payload: {
                data
            }
        })

        setData({ name: '', email:'', password:'', passwordConfirm:'', role: 'user'});
    }


    return (
        <div>

            <input type='text' name="name" placeholder="name" value={data.name} onChange={handleChange}/>
            
            <input type='email' name="email" placeholder="email" value={data.email} onChange={handleChange}/>
            
            <input type='password' name="password" placeholder="password" value={data.password} onChange={handleChange}/>
            
            <input type='password' name="passwordConfirm" placeholder="Confirm Password" value={data.passwordConfirm} onChange={handleChange}/>

            <div>
                <label>Choose your role </label>

                <label><input type="radio" name="role" value="user" checked={data.role === 'user'} onChange={handleChange}/>User</label>

                <label><input type="radio" name="role" value="admin" checked={data.role === 'admin'} onChange={handleChange}/>Admin</label>
            </div>
            <button onClick={handleSubmit}>Signup</button>

        </div>
    )
}

export default SignUp
