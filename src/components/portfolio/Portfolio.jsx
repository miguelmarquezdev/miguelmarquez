import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/port1.jpg'
import IMG2 from '../../assets/port2.jpg'
import IMG3 from '../../assets/port3.jpg'
import IMG4 from '../../assets/port4.jpg'
import IMG5 from '../../assets/port5.jpg'
import IMG6 from '../../assets/port6.jpg'

const data =[
  {
    id:1,
    image:IMG1,
    title:'Inca Trail Specialist',
    demo:'https://incatrailspecialist.com/'
  },
  {
    id:2,
    image:IMG2,
    title:'Machu Picchu Andean E.I.R.L.',
    demo:'https://machupicchu-andean.com'
  },
  {
    id:3,
    image:IMG3,
    title:'Happy Gringo Tours',
    demo:'https://happygringotours.com/'
  },
  {
    id:4,
    image:IMG4,
    title:'Inca Trail to Machu Picchu',
    demo:'https://incatrailmachupicchu.net/'
  },
  {
    id:5,
    image:IMG5,
    title:'Elvis Adventures',
    demo:'https://elvisadventures.com/'
  },
  {
    id:6,
    image:IMG6,
    title:'Machu Picchu Tours',
    demo:'https://machupicchu-tours.com/'
  },
]
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Mi trabajo reciente</h5>
      <h2>Portafolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({id,image,title,github,demo}) =>{
            return(
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title}/>
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target="_blank">Codigo</a>
                <a href={demo} className='btn btn-primary' target="_blank">Proyecto Real</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio
