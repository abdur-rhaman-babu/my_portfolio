import styles from '../../assets/css/Projects.module.css'
const Projects = () => {
    return (
        <div style={{textAlign:'center'}}>
            <h1 className={styles.heading}>My <span>Project</span></h1>

            <div className={styles.projects}>

                <div className={styles.singleProject}>
                    <h3>Todo App</h3>
                    <img src="https://i.postimg.cc/B640MXpR/todoapp.png" alt="" />
                    <a href="https://todo-list-app-theta-sable.vercel.app/">Preview</a>
                </div>

                <div className={styles.singleProject}>
                    <h3>Balance Calculator</h3>
                    <img src="https://i.postimg.cc/05Bwgg4X/balance-Calculator.jpg" alt="" />
                    <a href="https://balance-calculator-one.vercel.app/">Preview</a>
                </div>

                <div className={styles.singleProject}>
                    <h3>Tasbhi App</h3>
                    <img src="https://i.postimg.cc/C5znZJR4/Tasbhi-App.jpg" alt="" />
                    <a href="https://tasbhi-counter-app.vercel.app/">Preview</a>
                </div>

                <div className={styles.singleProject}>
                    <h3>Halal Jibika</h3>
                    <img src="https://i.postimg.cc/x8hJLHHV/job-website.jpg" alt="" />
                    <a href="https://halal-jibika-omega.vercel.app/">Preview</a>
                </div>
                <div className={styles.singleProject}>
                    <h3>Grocery Shop</h3>
                    <img src="https://i.postimg.cc/cCxN14Jq/grocery-app-4x.jpg" alt="" />
                    <a href="https://grocery-website-eta.vercel.app/">Preview</a>
                </div>

                <div className={styles.singleProject}>
                    <h3>Product List</h3>
                    <img src="https://i.postimg.cc/G21CNjwm/product-list.png" alt="" />
                    <a href="https://product-list-plum.vercel.app/">Preview</a>
                </div>

                <div className={styles.singleProject}>
                    <h3>Whether App</h3>
                    <img src="https://i.postimg.cc/vBLsd6bL/whether-app.png" alt="" />
                    <a href="https://jsweatherapp-delta.vercel.app/">Preview</a>
                </div>

                <div className={styles.singleProject}>
                    <h3>Book List</h3>
                    <img src="https://i.postimg.cc/wMLFrhzg/booklist.jpg" alt="" />
                    <a href="https://book-list-app-mu.vercel.app/">Preview</a>
                </div>

            </div>

        </div>
    );
};

export default Projects;