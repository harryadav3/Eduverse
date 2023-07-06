import { Link, NavLink } from "react-router-dom";
import styles from"./Header.module.css";
import logo from './../assets/logo.svg'
function Header() {
  return (
    <header>
      <div >
        <img className={styles.logo} src={logo} alt="logo.img" />
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

      <div className="status">
        <Link to="login"><button>Login</button></Link>
        <Link to="signup"><button>Signup</button></Link>
      </div>
      </nav>

    </header>
  );
}

export default Header;
