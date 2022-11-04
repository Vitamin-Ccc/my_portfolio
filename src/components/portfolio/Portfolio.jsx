import React from "react";
import "./portfolio.css";
// import IMG1 from '../../image/portfolio1.jpg'

const data = [
  {
    id: 1,
    // image: IMG1,
    title: 'Memo',
    github: 'https://github.com/Vitamin-Ccc/Memo',
    demo: ''
  },
  {
    id: 2,
    title: 'Cocktail Recipe',
    github: 'https://github.com/Vitamin-Ccc/cocktail',
    demo: ''
  },
  {
    id: 3,
    title: 'Trip Planner',
    github: 'https://github.com/Vitamin-Ccc/my_planner',
    demo: ''
  },
  {
    id: 4,
    title: 'Slurp Boba',
    github: 'https://github.com/Vitamin-Ccc/slurp',
    demo: ''
  }

]


const Portfolio = () => {

  const renderProject = () => {
    return data.map(({id, image, title, github, demo}) => {
      return (
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            {/* <img src={image} alt={title} /> */}
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
            <a href={github} className="btn" target="_blank" rel="noreferrer">
              Github
            </a>
            {/* <a href={demo} className="btn btn-primary" target="_blank" rel="noreferrer" >
              Live Demo
            </a> */}
          </div>
        </article>
      )
    })
  }

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {renderProject()}
      </div>
    </section>
  );
};

export default Portfolio;
