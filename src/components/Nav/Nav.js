import React from "react";
import { useState } from 'react'
import './Nav.scss';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageSquareDetail } from 'react-icons/bi'

function Nav() {
    const [activeLink, setActiveLink] = useState('#');
    return (
        <nav>
            <a onClick={() => setActiveLink('#')} className={activeLink === '#' ? 'active' : ''} href='#'><AiOutlineHome /></a>
            <a onClick={() => setActiveLink('#about')} className={activeLink === '#about' ? 'active' : ''} href="#about"><AiOutlineUser /></a>
            <a onClick={() => setActiveLink('#experience')} className={activeLink === '#experience' ? 'active' : ''} href="#experience"><BiBook /></a>
            <a onClick={() => setActiveLink('#contact')} className={activeLink === '#contact' ? 'active' : ''} href="#contact"><BiMessageSquareDetail /></a>
        </nav>
    );
}

export default Nav;