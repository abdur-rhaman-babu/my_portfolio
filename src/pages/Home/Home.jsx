/* eslint-disable react/no-unescaped-entities */
import styles from '../../assets/css/Home.module.css'
import { LiaFacebookSquare, LiaGithubSquare, LiaLinkedin, LiaWhatsappSquare } from "react-icons/lia";
const Home = () => {
    return (
        <div className={styles.homepage}>
            <div className={styles.homeText}>
                <h3>Hello, It's Me</h3>
                <h1>Abdur Rhaman Babu</h1>
                <h3>And I'm a <span>Frontend Web Developer</span></h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia vitae pariatur fugiat ipsum nam delectus facilis autem cumque debitis est?</p>
                <div className={styles.homeIcons}>
                    <a href="#"><LiaLinkedin /></a>
                    <a href="#"><LiaGithubSquare /></a>
                    <a href="#"><LiaFacebookSquare /></a>
                    <a href="#"><LiaWhatsappSquare /></a>
                </div>
                <button className={styles.btn}>Hire me</button>
            </div>
            <div className={styles.homeImage}>
                <img src="../../../src/assets/Image/abdurrahman.jpg" alt="" />
            </div>
        </div>
    );
};

export default Home;