import React from "react";
import "./portfolio.css";
import slurp from '../../images/slurp.jpeg'
import psa10 from '../../images/psa10.jpeg'
import gericht from '../../images/gericht.jpeg'

const data = [
  {
    id: 1,
    image: slurp,
    title: 'Slurp Utah',
    github: 'https://github.com/Vitamin-Ccc/slurp',
    demo: 'https://www.slurputah.com'
  },
  {
    id: 2,
    image: psa10,
    title: 'PSA10',
    github: 'https://github.com/XavioArts/psa10_app',
  },

  {
    id: 3,
    image: gericht,
    title: 'Gericht Restaurant',
    github: 'https://github.com/Vitamin-Ccc/gericht_restaurant',
    // demo: ''
  },
  // {
  //   id: 2,
  //   title: 'Cocktail Recipe',
  //   github: 'https://github.com/Vitamin-Ccc/cocktail',
  //   demo: ''
  // },
  // {
  //   id: 3,
  //   title: 'Trip Planner',
  //   github: 'https://github.com/Vitamin-Ccc/my_planner',
  //   demo: ''
  // },

]


const Portfolio = () => {

  const renderProject = () => {
    return data.map(({id, image, title, github, demo}) => {
      if(!demo) {
        return (
          <article className="portfolio__item" key={id}>
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} className="btn" target="_blank" rel="noreferrer">
                Github
              </a>
            </div>
          </article>
        )
      }
      return (
        <article className="portfolio__item" key={id}>
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
            <a href={github} className="btn" target="_blank" rel="noreferrer">
              Github
            </a>
            <a href={demo} className="btn btn-primary" target="_blank" rel="noreferrer" >
              Live Demo
            </a>
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
