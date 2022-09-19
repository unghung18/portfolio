import React from "react";
import './Experience.scss'
import { BsPatchCheckFill } from 'react-icons/bs'

function Experience() {
    return (
        <section id="experience">
            <h2>Skills</h2>
            <h5>Một số kĩ năng hiện có</h5>

            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Frontend</h3>
                    <div className="experience__content">
                        <article className="experience__detail">
                            <BsPatchCheckFill className='experience__detail-icon' />
                            <div>
                                <h4>HTML</h4>
                                <small>Experienced</small>
                            </div>
                        </article>
                        <article className="experience__detail">
                            <BsPatchCheckFill className='experience__detail-icon' />
                            <div>
                                <h4>CSS</h4>
                                <small>Experienced</small>
                            </div>
                        </article>
                        <article className="experience__detail">
                            <BsPatchCheckFill className='experience__detail-icon' />
                            <div>
                                <h4>Javascript</h4>
                                <small>Experienced</small>
                            </div>
                        </article>
                        <article className="experience__detail">
                            <BsPatchCheckFill className='experience__detail-icon' />
                            <div>
                                <h4>Sass</h4>
                                <small>Experienced</small>
                            </div>
                        </article>
                        <article className="experience__detail">
                            <BsPatchCheckFill className='experience__detail-icon' />
                            <div>
                                <h4>Bootstrap</h4>
                                <small>Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__detail">
                            <BsPatchCheckFill className='experience__detail-icon' />
                            <div>
                                <h4>React</h4>
                                <small>Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="experience__backend">
                    <h3>Backend</h3>
                    <div className="experience__content">
                        <article className="experience__detail">
                            <BsPatchCheckFill className='experience__detail-icon' />
                            <div>
                                <h4>Nodejs</h4>
                                <small>Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__detail">
                            <BsPatchCheckFill className='experience__detail-icon' />
                            <div>
                                <h4>MongoDb</h4>
                                <small>Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__detail">
                            <BsPatchCheckFill className='experience__detail-icon' />
                            <div>
                                <h4>Express</h4>
                                <small>Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__detail">
                            <BsPatchCheckFill className='experience__detail-icon' />
                            <div>
                                <h4>Jwt</h4>
                                <small>Intermediate</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;