import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "../../assets/css/Mainlayout.module.css"
const Mainlayout = () => {
    return (
        <div>
            <Header/>
            <div className={styles.mainlayout}>
            <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Mainlayout;