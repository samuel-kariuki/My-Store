import styles from "./ContactForm.module.scss";
import { Header } from "core/components/header/header";
import Footer from "core/components/footer/Footer";
import "core/app/globals.scss";
import { FaPhone } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa6";
import { FaRegPaperPlane } from "react-icons/fa6";
import { FaEarthAfrica } from "react-icons/fa6";



const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
<div>
<Header /> 

    <div className={styles.container}>

      <div className={styles.formContainer}>

        <h1>Contact Us</h1>

        <form onSubmit={handleSubmit}>

          <div className={styles.formGroup}>

            <label htmlFor="email">Email</label>

            <input type="email" id="email" name="email" required />
          </div>
          <div className={styles.formGroup}>

            <label htmlFor="password">Password</label>

            <input type="password" id="password" name="password" required />
          </div>

          <div className={styles.formGroup}>

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </form>
      </div>
      <div className={styles.infoContainer}>
        <h2>Need additional information?</h2>
        <p>
        A multifaceted professional skilled in multiple fields of research, development as well as a learning specialist. Over 15 years of experience.
        </p>
        <div className={styles.contactInfo}>
          <div className={styles.infoItem}>
            
            <span> <FaPhone/> +254 123 456789</span>
          </div>
          <div className={styles.infoItem}>
            
            <span> <FaRegPaperPlane/> Moi Ave Street, Nairobi, Kenya</span>
          </div>
          <div className={styles.infoItem}>
           
            <span><FaRegEnvelope/> store@mail.com</span>
          </div>
          <div className={styles.infoItem}>
            
            <span><FaEarthAfrica/> www.store.com</span>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default ContactPage;