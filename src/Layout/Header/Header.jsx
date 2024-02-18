import { NavLink } from "react-router-dom";
import styles from "../../assets/css/Header.module.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
const Header = () => {
    const [showicon, setShowIcon] = useState(false) 

    const showIconhandler = () =>{
        setShowIcon(!showicon)
    }
    return (
         <div className={styles.header}>
            <a className={styles.logo} href="#">AR <span>Babu</span></a>

            <nav className={`${styles.navbar} ${showicon ? styles.resnav : ''}`}>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/services'>Service</NavLink>
                <NavLink to='/skills'>Skills</NavLink>
                <NavLink to='/projects'>Projects</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
            </nav> 

            <div className={styles.icons} onClick={showIconhandler}>
            {
               showicon ? <FaTimes /> : <FaBars />
            }
            </div>
         </div>
    );
};

export default Header;