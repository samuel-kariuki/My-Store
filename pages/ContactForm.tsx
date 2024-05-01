import styles from "./ContactForm.module.scss";
import { Header } from "core/components/header/header";
import Footer from "core/components/footer/Footer";
import "core/app/globals.scss";
import { FaPhone } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa6";
import { FaRegPaperPlane } from "react-icons/fa6";
import { FaEarthAfrica } from "react-icons/fa6";
import React from 'react';

const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      <Header />
      <div className={styles.container}>
        {/* ... */}
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;