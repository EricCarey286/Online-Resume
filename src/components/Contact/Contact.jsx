import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import './Contact.css';

export default function Contact({ ...props }) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8e72fb5', 'template_e8oqcb9', form.current, 'V_TYKAT8dkSssHTNv')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      
  };

  return (
    <div id="contact-div">
    <form ref={form} onSubmit={sendEmail} className="contact-form">
    <h3>Contact Me</h3>
    <h5>For more information</h5>
      <label>Name</label>
      <input type="text" name="user_name" className="contact-input"/>
      <label>Email</label>
      <input type="email" name="user_email" className="contact-input" />
      <label>Message</label>
      <textarea name="message" className="contact-input"/>
      <input type="submit" value="Send" className="submit"/>
    </form>
    </div>
  );
};