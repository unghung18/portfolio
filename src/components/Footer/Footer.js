import React from "react";
import { FiInstagram } from 'react-icons/fi'
import { BsGithub } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'

import './Footer.scss'


function Footer() {
    return (
        <footer id="footer">
            <a href="#" className="footer__logo">Rio</a>

            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials link__socials">
                <a href='https://github.com/ronglon1802' target='_blank' rel="noreferrer"><BsGithub className='social-icon' /></a>
                <a href='https://www.messenger.com/t/100058122019367/' target='_blank' rel="noreferrer"><BsFacebook className='social-icon' /></a>
                <a href='https://www.instagram.com' target='_blank' rel="noreferrer"><FiInstagram className='social-icon' /></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; Rio. All rights reserved</small>
            </div>
        </footer>
    );
}

export default Footer;