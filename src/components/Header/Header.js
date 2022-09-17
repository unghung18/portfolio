import React from "react";
import CTA from "./CTA";
import Me from '../../assets/header-img.svg'
import LinkSocials from "./LinkSocials";
import './Header.scss';

function Header() {
    return (
        <header>
            <div className="container header__container">
                <div className="header__content">
                    <h5>Hello I'm</h5>
                    <h1>Ứng Hùng</h1>
                    <h4 className="text-light">A Front-end Developer</h4>
                    <CTA />
                </div>

                <LinkSocials />
                <a href="#contact" className="scroll__down">Scroll Down</a>

                <div className="banner__img">
                    <img src={Me} alt='ava' />
                </div>
            </div>
        </header>
    );
}


export default Header;