import styles from '../../assets/css/About.module.css'
const About = () => {
    return (
        <div className={styles.aboutPage}>
            <div className={styles.aboutPageImage}>
            <img src="https://i.postimg.cc/0jJLwPCz/babu.png" alt="" />
            </div>
            <div className={styles.aboutPageText}>
            <h1>About <span>Me</span></h1>
            <h3>Frontend Developer</h3>
            <p>I am a passionate frontend developer dedicated to crafting immersive digital experiences through the art of code. With a strong foundation in HTML, CSS, and JavaScript, I specialize in bringing designs to life while prioritizing user-centric principles and seamless functionality.</p>

            <p>Driven by a curiosity to explore the ever-evolving landscape of web technologies, I continuously seek to expand my skill set and stay abreast of industry trends.</p>
            <a href="#" className={styles.btn}>More About</a>
            </div>
        </div>
    );
};

export default About;