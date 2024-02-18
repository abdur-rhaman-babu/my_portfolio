import styles from '../../assets/css/Skills.module.css'
const Skills = () => {
    return (
        <div className={styles.skillContent}>
       <h1 className={styles.heading}>My <span>Skills</span></h1>
        <div className={styles.skillPage}>
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