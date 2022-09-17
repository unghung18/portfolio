import React from "react";
import './Portfolio.scss'
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';


function Portfolio() {
    const dataPortfolio = [
        {
            image: IMG2,
            title: 'Movie app with Api',
            github: 'https://github.com/unghung18/tmovie',
            url: 'https://tmovie-eight.vercel.app/'
        },
        {
            image: IMG1,
            title: 'Pokedex app with Api',
            github: 'https://github.com/unghung18/pokedex-app',
            url: 'https://pokedex-app-sooty.vercel.app/'
        },
        {
            image: IMG3,
            title: 'This is a portfolio item title',
            github: 'https://github.com/ronglon182',
            url: 'https://dribbble.com/'
        },
        {
            image: IMG4,
            title: 'This is a portfolio item title',
            github: 'https://github.com/ronglon182',
            url: 'https://dribbble.com/'
        },
        {
            image: IMG5,
            title: 'This is a portfolio item title',
            github: 'https://github.com/ronglon182',
            url: 'https://dribbble.com/'
        },
        {
            image: IMG6,
            title: 'This is a portfolio item title',
            github: 'https://github.com/ronglon182',
            url: 'https://dribbble.com/'
        },

    ]
    return (
        <section className="portfolio">
            <h2>Portfolio</h2>
            <h5>Một số dự án đã làm</h5>

            <div className="container portfolio__container">
                {dataPortfolio.map((item, index) => (
                    <article key={index} className="portfolio__item">
                        <div className="portfolio__item-img">
                            <img src={item.image} alt='portfolio-img' />
                        </div>
                        <h3>{item.title}</h3>
                        <a href={item.github} target='_blank' rel="noreferrer" className="btn">Github</a>
                        <a href={item.url} target='_blank' rel="noreferrer" className="btn btn-primary">Live Demo</a>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Portfolio;