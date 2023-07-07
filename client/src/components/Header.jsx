import { Link, NavLink } from "react-router-dom";
import logo from './../assets/logo.svg'
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Header() {

  const {name,isAuthenticated,userRole, dispatch} =  useContext(AuthContext); 
  //const {name,isAuthenticated}  = state || {};
{  console.log(name)
}  
return (
    <header >
      <div >
        <img className="logo" src={logo} alt="logo.img" />
      </div>

      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="courses">Courses</NavLink>
          </li>
        </ul>

      <div >

        { 
        isAuthenticated ? (<>
          <div> <span>{name}</span></div>
        </>) :  <>  
          <Link className="btn" to="login"><span>Login</span></Link>
          <Link to="signup"><span className="signup">Sign Up</span></Link>
          </>
         
        }
        
        </div>

        
      </nav>

    </header>
  );
}

export default Header;
