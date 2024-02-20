/* eslint-disable react/no-unescaped-entities */
import styles from '../../assets/css/Home.module.css'
import { LiaFacebookSquare, LiaGithubSquare, LiaLinkedin, LiaWhatsappSquare } from "react-icons/lia";
const Home = () => {
    return (
        <div className={styles.homepage}>
            <div className={styles.homeText}>
                <h3>Hello, It's Me</h3>
                <h1>Abdur Rhaman Babu</h1>
                <h3>And I'm a <span>Frontend Developer</span></h3>
                <p>I am a Frontend Developer. I am able to create responsive, user friendly, dynamic and effective User Interface.</p>
                <div className={styles.homeIcons}>
                    <a href="https://www.linkedin.com/in/abdur-rhaman-babu-239553228/"><LiaLinkedin /></a>
                    <a href="https://github.com/abdur-rhaman-babu"><LiaGithubSquare /></a>
                    <a href="https://www.facebook.com/mdarahman.babu/"><LiaFacebookSquare /></a>
                    <a href="#"><LiaWhatsappSquare /></a>
                </div>
                <a href ="https://drive.google.com/file/d/1G9nFbX6CvfE61i6Yo6N5P9XthFUPVgLL/view?usp=sharing" className={styles.btn}>Hire me</a>
            </div>
            <div className={styles.homeImage}>
                <img src="https://i.postimg.cc/8zcsLDD4/abdur-Rahamn.png" alt="" />
            </div>
        </div>
    );
};

export default Home;