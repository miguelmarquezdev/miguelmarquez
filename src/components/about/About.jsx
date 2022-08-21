import React from 'react'
import './about.css'
import ME from '../../assets/ABOUT.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Conoce más</h5>
      <h2>Sobre Mi</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experiencia</h5>
              <small>+ de 5 años de Trabajo</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clientes</h5>
              <small>10 a + Agencias</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Proyectos</h5>
              <small>+ de 20 Proyectos</small>
            </article>
          </div>
          <p>
Me apaciona el papel de que desepeña en la sociedad, tambien la influencia en la mejora de los negocios de cada uno de mis clientes,  Mi flujo de trabajo es netamente personal, colaborando con mis clientes para crear soluciones convicentes que reflejan sus necesidades.</p>
       <a href="#contact" className='btn btn-primary'>Hablemos</a>
        </div>
      </div>
    </section>
  )
}

export default About