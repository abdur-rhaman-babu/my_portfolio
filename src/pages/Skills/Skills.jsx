import styles from '../../assets/css/Skills.module.css'
import { FaPaintBrush } from "react-icons/fa";
import { MdDeveloperMode } from "react-icons/md";
import { HiDeviceTablet } from "react-icons/hi";
const Skills = () => {
    return (
        <div className={styles.skillContent}>
       <h1 className={styles.heading}>My <span>Skills</span></h1>
        <div className={styles.skillPage}>
           <div>
           <div className={styles.skillTextContent}>
                <a href="#"><FaPaintBrush /></a>
                <div className={styles.skillText}>
                    <h3>Development</h3>
                    <p>clean, modern, optimized for performance, search engines, and converting users to customers</p>
                </div>
            </div>
            <div className={styles.skillTextContent}>
                <a href="#"><MdDeveloperMode /></a>
                <div className={styles.skillText}>
                    <h3>Technology</h3>
                    <p>combined all the latest technologies to a progressive website</p>
                </div>
            </div>
            <div className={styles.skillTextContent}>
                <a href="#"><HiDeviceTablet /></a>
                <div className={styles.skillText}>
                    <h3>always responsive</h3>
                    <p>a responsive design makes your website to all user regardless of their divice</p>
                </div>
            </div>
           </div>
            <div className={styles.skillContainer}>
            <div className={styles.skills}>
                <div className={`${styles.innerSkill} ${styles.innerSkillHTML}`}>
                    <p>HTML</p>
                    <p>85%</p>
            </div>
            </div>
            <div className={styles.skills}>
                <div className={`${styles.innerSkill} ${styles.innerSkillCss}`}>
                    <p>CSS</p>
                    <p>78%</p>
            </div>
            </div>
            <div className={styles.skills}>
                <div className={`${styles.innerSkill} ${styles.innerSkillJs}`}>
                    <p>JAVASCRIPT</p>
                    <p>70%</p>
            </div>
            </div>
            <div className={styles.skills}>
                <div className={`${styles.innerSkill} ${styles.innerSkillRJs}`}>
                    <p>REACT JS</p>
                    <p>72%</p>
            </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Skills;