import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import "./Contact.css";

export default function Contact() {
  const [isSuccessful, setIsSuccessful] = useState("null");

  const serviceKey = 'service_8e72fb5';
  const templateKey = 'template_e8oqcb9';
  const publicKey = 'V_TYKAT8dkSssHTNv';

  const form = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceKey, templateKey, form.current, publicKey).then(
      (result) => {
        validateSuccess(true);
        console.log(result.text);
      },
      (error) => {
        validateSuccess(false);
        console.log(error.text);
      },
    );
    nameRef.current.value = "";
    emailRef.current.value = "";
    messageRef.current.value = "";
  };

  function validateSuccess(result) {
    if (result) {
      setIsSuccessful("success");
    } else {
      setIsSuccessful("error");
    }
  }

  return (
    <div id="contact-div">
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <h3>Contact Me</h3>
        <h5>For more information</h5>
        <label>Name</label>
        <input
          ref={nameRef}
          type="text"
          name="user_name"
          className="contact-input"
          required
        />
        <label>Email</label>
        <input
          ref={emailRef}
          type="email"
          name="user_email"
          className="contact-input"
          required
        />
        <label>Message</label>
        <textarea ref={messageRef} name="message" className="contact-input" />
        <input type="submit" value="Send" className="submit" required />
        {isSuccessful == "success" ? (
          <p className="contact-success "> Your message has been sent</p>
        ) : isSuccessful == "error" ? (
          <p className="contact-error">
            There was an error sending your message.
          </p>
        ) : null}
      </form>
    </div>
  );
}
