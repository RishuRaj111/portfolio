// Contact.js
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault(); // Prevent the default form submission

        emailjs.sendForm('service_s0l87ii', 'template_x62iez1', form.current, '1-yRFaSVzBXcrK5vI')
            .then((result) => {
                alert("Email sent successfully!"); // Alert on success
                console.log(result.text);
            }, (error) => {
                alert("Error sending email: " + error.text); // Alert on error
                console.log(error.text);
            });
    };

    return (
        <div className="contact-container">
            <h2>Contact Me</h2>
            <form ref={form} onSubmit={sendEmail} className="contact-form">
                <label>Name</label>
                <input type="text" name="user_name" required />
                
                <label>Email</label>
                <input type="email" name="user_email" required />
                
                <label>Message</label>
                <textarea name="message" required />
                
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default Contact;
