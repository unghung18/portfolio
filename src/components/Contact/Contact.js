import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import './Contact.scss'

import { AiOutlineMail, AiOutlineInstagram } from 'react-icons/ai'
import { BsMessenger } from 'react-icons/bs'

function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ip4fpcz', 'template_1q6ep9y', form.current, 'bIRaCYFGBDFaI2BBK')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <section id="contact">
            <h2>Contact me</h2>
            <h5>Get In Touch</h5>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <AiOutlineMail className="contact__option-icon" />
                        <h4>Email</h4>
                        <h5>cusn1802@gmail.com</h5>
                        <a href="mailto:cusn1802@gmail.com" target='_blank' rel="noreferrer">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <BsMessenger className="contact__option-icon" />
                        <h4>Message</h4>
                        <h5>Ứng Hùng</h5>
                        <a href="https://www.messenger.com/t/100058122019367/" target='_blank' rel="noreferrer">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <AiOutlineInstagram className="contact__option-icon" />
                        <h4>Instagram</h4>
                        <h5>Kuns1802</h5>
                        <a href="https://www.instagram.com" target='_blank' rel="noreferrer">Send a message</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type='text' name='name' placeholder='Tên đầy đủ của bạn' required />
                    <input type='email' name='email' placeholder='Email của bạn' required />
                    <textarea rows="7" name='message' placeholder='Message của bạn' required></textarea>
                    <button type="Submit" className="btn btn-primary">Send message</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;