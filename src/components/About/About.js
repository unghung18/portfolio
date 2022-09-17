import React from "react";
import './About.scss'
import Me from '../../assets/me-about.jpg';
import { FaAward, FaUserFriends } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'

function About() {
    return (
        <section id="about">
            <h2>About Me</h2>
            <h5>Get to Know</h5>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-img">
                        <img src={Me} alt="ava" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className="about__icon" />
                            <h3>01+</h3>
                            <small>Years Experience</small>
                        </article>

                        <article className="about__card">
                            <FaUserFriends className="about__icon" />
                            <h3>20+</h3>
                            <small>Completed projects</small>
                        </article>

                        <article className="about__card">
                            <VscFolderLibrary className="about__icon" />
                            <h3>00</h3>
                            <small>Companies worked</small>
                        </article>
                    </div>
                    <p className="about__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
                </div>
            </div>
        </section>
    );
}

export default About;