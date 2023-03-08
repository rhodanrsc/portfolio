import React from "react";
import { useState, useRef } from "react";
import apiKey from '../emailkey'
import emailjs from 'emailjs-com'

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm(apiKey.SERVICE_ID, apiKey.TEMPLATE_ID, form.current, apiKey.PUBLIC_KEY)
        .then((result) => {
            alert("Message Sent, We will get back to you shortly", result.text);
        },
        (error) => {
            alert("An error occurred, Please try again", error.text);
        });
    };

    // Makes the "Send" button look like it's pressed
    const submitDown = () => {
        document.getElementById('submit').style.scale = '0.9';
    }
    const submitUp = () => {
        document.getElementById('submit').style.scale = '1';
    }

    return(
        <form ref={form} className="contactForm" onSubmit={sendEmail} id='contactForm' >
            <label htmlFor="firstname">First Name:</label>
            <input type='text' id="firstname" name="firstname" placeholder="First Name" required />
            <br/>

            <label htmlFor="lastname">Last Name:</label>
            <input type='text' id="lastname" name="lastname" placeholder="Last Name" required />
            <br/>

            <label htmlFor="email">Email:</label>
            <input type='email' id="email" name="email" placeholder="Email" required />
            <br/>

            <label htmlFor="message">Message:</label> 
            <textarea id="message" name="message" placeholder="Feel free to reach out!" required />
            <br/>

            <button type="submit" id='submit' className='submit' onMouseDown={submitDown} onMouseUp={submitUp} >Send</button>
        </form>
    )
}

export default ContactForm;