import React from 'react'
import './experience.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experiencie'>
      <h5>Qué habilidades tengo</h5>
      <h2>Experiencia</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Desarrollo Frontend </h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsFillPatchCheckFill  className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experto</small>
              </div>

            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermedio</small>
              </div>

            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Básico - Medio</small>
              </div>

            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill  className='experience__details-icon'/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Intermedio</small>
              </div>

            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill  className='experience__details-icon'/>
              <div>
                <h4>Wordpress</h4>
                <small className='text-light'>Experto</small>
              </div>

            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill  className='experience__details-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Básico</small>
              </div>

            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Otras Habilidades </h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsFillPatchCheckFill  className='experience__details-icon'/>
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Básico</small>
              </div>

            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill  className='experience__details-icon'/>
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Básico</small>
              </div>

            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>NodeJS</h4>
                <small className='text-light'>Básico</small>
              </div>

            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill  className='experience__details-icon'/>
              <div>
                <h4>Photoshop</h4>
                <small className='text-light'>Experience</small>
              </div>

            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill  className='experience__details-icon'/>
              <div>
                <h4>Illustrator</h4>
                <small className='text-light'>Experience</small>
              </div>

            </article>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Experience