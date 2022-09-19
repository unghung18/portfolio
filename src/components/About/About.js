import React from "react";
import './About.scss'
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
                        <h3>Ảnh đẹp sẽ ở đây</h3>
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className="about__icon" />
                            <h3>1+</h3>
                            <small>Years Experience</small>
                        </article>

                        <article className="about__card">
                            <FaUserFriends className="about__icon" />
                            <h3>6+</h3>
                            <small>Completed projects</small>
                        </article>

                        <article className="about__card">
                            <VscFolderLibrary className="about__icon" />
                            <h3>00</h3>
                            <small>Companies worked</small>
                        </article>
                    </div>
                    <p className="about__text">With nearly 4 months of selft-stydy at home . I am very much looking forward to becoming a Web Developer. Having a solid knowledge of Html, Css, Javascript, MERN and other skills that i hone daily. In the next year, I want tobecome a full-fledged developer on the way to workand accompany thecompany which can help me develop myself as well as contribute a lot to the development of the company.</p>
                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
                </div>
            </div>
        </section>
    );
}

export default About;