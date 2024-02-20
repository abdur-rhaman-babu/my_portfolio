import { LiaFacebookSquare, LiaGithubSquare, LiaLinkedin, LiaWhatsappSquare } from "react-icons/lia";
import styles from '../../assets/css/Footer.module.css'
const Footer = () => {
    return (
        <div className={styles.footerContent}>
            <h1 className={styles.footerLogo}>AR <span>Babu</span></h1>
            <div className={styles.footerIcons}>
                    <a href="https://www.linkedin.com/in/abdur-rhaman-babu-239553228/"><LiaLinkedin /></a>
                    <a href="https://github.com/abdur-rhaman-babu"><LiaGithubSquare/></a>
                    <a href="https://www.facebook.com/mdarahman.babu/"><LiaFacebookSquare /></a>
                    <a href="#"><LiaWhatsappSquare /></a>
                </div>
        </div>
    );
};

export default Footer;