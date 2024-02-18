import styles from '../../assets/css/Contact.module.css' 
const Contact = () => {
    return (
        <div className={styles.contactContact}>
            <h1 className={styles.heading}> <span>Contact</span>Me</h1>
        <div className={styles.contactContainer}>
            
            <form action="#">
            <div className={styles.cols}>

            <div>
            <label htmlFor="First Name">First Name:</label> <br />
            <input type="text" placeholder='enter your first name' /> 
            </div>

            <div>
            <label htmlFor="Last Name">Last Name:</label> <br />
            <input type="text" placeholder='enter your last name' /><br />
            </div>

            </div>

            <div className={styles.cols}>
            <div>
            <label htmlFor="email">Email:</label><br />
            <input type="email" placeholder='enter your email'/><br />
            </div>
            <div>

            <label htmlFor="Phone">Phone:</label> <br />
            <input type="number" placeholder='enter your phone number' />
            </div>
            </div>

            <label htmlFor="First Name">Message:</label> <br />
            <textarea  cols="30" rows="5"></textarea><br />
            <a href="#" className={styles.formbtn}>Submit</a>
        </form>
        </div>
        </div>
    );
};

export default Contact;