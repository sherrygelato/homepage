import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import styles from './contact.module.css';

import apiKeys from '../../data/apikeys';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(apiKeys.SERVICE_ID, apiKeys.TEMPLATE_ID, form.current, apiKeys.USER_ID)
    .then((result) => {
      console.log(result.text);
      alert('Message Sent, I\'ll get back to you shortly', result.text);
      window.location.reload();
    }, (error) => {
      console.log(error.text);
      alert( 'An error occured, Plese try again',error.text)
      window.location.reload();
    });
  };

  return (
    <>
        <div className={styles.container}>
          <h1>Contact me</h1>
          <form ref={form} className={styles.form} onSubmit = {sendEmail}>
            <p>Name (required) </p>
            <input 
              name='name' 
              type='text'
              className={styles.form_input}
            />
            <p>Email (required) </p>
            <input 
              name='email' 
              type='text'
              className={styles.form_input}
            />
            <p>Subject</p>
            <input 
              name='subject' 
              type='text'
              className={styles.form_input}
            />
            <p>Your Message</p>
            <textarea 
              name='message' 
              type='text'
              className={styles.form_input_message}
            />
            <input type="submit" value="send" className={styles.form_input_button} />
          </form>
        </div>
    </>
  );
}

export default Contact;
