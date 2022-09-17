import React from "react";
import './Services.scss'
import { BsCheck } from 'react-icons/bs'

function Services() {
    return (
        <section id="services">
            <h2>Services</h2>
            <h5>What I Offer</h5>

            <div className="container services__container">
                <article className="service">
                    <div className="service__header">
                        <h3>Content Creation</h3>
                    </div>
                    <ul className="service__list">
                        <li className='service__list-item'>
                            <BsCheck className="service__list-icon" />
                            <p>Lorem ipsum dolor sit amet consectetur</p>
                        </li>
                        <li className='service__list-item'>
                            <BsCheck className="service__list-icon" />
                            <p>Lorem ipsum dolor sit amet consectetur</p>
                        </li>
                        <li className='service__list-item'>
                            <BsCheck className="service__list-icon" />
                            <p>Lorem ipsum dolor sit amet consectetur</p>
                        </li>
                        <li className='service__list-item'>
                            <BsCheck className="service__list-icon" />
                            <p>Lorem ipsum dolor sit amet consectetur</p>
                        </li>
                        <li className='service__list-item'>
                            <BsCheck className="service__list-icon" />
                            <p>Lorem ipsum dolor sit amet consectetur</p>
                        </li>
                    </ul>
                </article>
                <article className="service">
                    <div className="service__header">
                        <h3>Web Deverloper</h3>
                    </div>
                    <ul className="service__list">
                        <li className='service__list-item'>
                            <BsCheck className="service__list-icon" />
                            <p>Lorem ipsum dolor sit amet consectetur</p>
                        </li>
                        <li className='service__list-item'>
                            <BsCheck className="service__list-icon" />
                            <p>Lorem ipsum dolor sit amet consectetur</p>
                        </li>
                        <li className='service__list-item'>
                            <BsCheck className="service__list-icon" />
                            <p>Lorem ipsum dolor sit amet consectetur</p>
                        </li>
                        <li className='service__list-item'>
                            <BsCheck className="service__list-icon" />
                            <p>Lorem ipsum dolor sit amet consectetur</p>
                        </li>
                        <li className='service__list-item'>
                            <BsCheck className="service__list-icon" />
                            <p>Lorem ipsum dolor sit amet consectetur</p>
                        </li>
                    </ul>
                </article>
                <article className="service">
                    <div className="service__header">
                        <h3>UI/UX Design</h3>
                    </div>
                    <ul className="service__list">
                        <li className='service__list-item'>
                            <BsCheck className='service__list-item' />
                            <p>Lorem ipsum dolor sit amet consectetur</p>
                        </li>
                        <li className='service__list-item'>
                            <BsCheck className='service__list-item' />
                            <p>Lorem ipsum dolor sit amet consectetur</p>
                        </li>
                        <li className='service__list-item'>
                            <BsCheck className='service__list-item' />
                            <p>Lorem ipsum dolor sit amet consectetur</p>
                        </li>
                        <li className='service__list-item'>
                            <BsCheck className='service__list-item' />
                            <p>Lorem ipsum dolor sit amet consectetur</p>
                        </li>
                        <li className='service__list-item'>
                            <BsCheck className='service__list-item' />
                            <p>Lorem ipsum dolor sit amet consectetur</p>
                        </li>
                    </ul>
                </article>
            </div>

        </section>
    );
}

export default Services;