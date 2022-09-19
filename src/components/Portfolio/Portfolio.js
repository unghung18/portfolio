import React from "react";
import './Portfolio.scss'
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';


function Portfolio() {
    const dataPortfolio = [
        {
            image: IMG3,
            title: 'LearnApp',
            github: 'https://github.com/unghung18/LearnApp',
            url: 'https://ornate-eclair-f8454b.netlify.app'
        },
        {
            image: IMG1,
            title: 'Pokedex App with PokeApi',
            github: 'https://github.com/unghung18/pokedex-app',
            url: 'https://pokedex-app-sooty.vercel.app/'
        },
        {
            image: IMG2,
            title: 'ReactFlix App with ThemovieApi',
            github: 'https://github.com/unghung18/tmovie',
            url: 'https://reactflix-eightt.vercel.app/'
        },
        {
            image: IMG4,
            title: 'Portfolio Website',
            github: 'https://github.com/unghung18/portfolio',
            url: 'https://portfolio-ruby-sigma-54.vercel.app/'
        },
        {
            image: IMG5,
            title: 'E-Commerce Website',
            github: 'https://github.com/unghung18/Lanie-Ecommerge-Web',
            url: 'https://lanie-ecommerge-web.vercel.app/'
        }
    ]
    return (
        <section className="portfolio">
            <h2>Portfolio</h2>
            <h5>Một số dự án đã làm</h5>

            <div className="container portfolio__container">
                {dataPortfolio.map((item, index) => (
                    <article key={index} className="portfolio__item">
                        <div className="portfolio__item-img" style={{ backgroundImage: `url(${item.image})` }}>
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