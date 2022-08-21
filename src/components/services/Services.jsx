import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>Qué ofrezco</h5>
      <h2>Servicios</h2>
      <div className="container services__container">
        <article className="services">
          <div className="services__head">
            <h3>Diseño de Interfaces</h3>
          </div>
          <ul className='service__list'>
            <li><BiCheck className='service__list-icon' />
              <p>Maquetado y estructura de la Página Web HTML, Css y Javascript.</p>
            </li>
            <li><BiCheck className='service__list-icon' />
              <p>Creación de Plantillas para Wordpress, Blogger, React.</p>
            </li>
            <li><BiCheck className='service__list-icon' />
              <p>Diseños únicos y personalizados para cada tipo de negocio.</p>
            </li>
            <li><BiCheck className='service__list-icon' />
              <p>Cms fácil de usar y entendible para cada usuario.</p>
            </li>
            <li><BiCheck className='service__list-icon' />
              <p>Tiendas virtuales Ecommercee, Plugins, Woocomeerce.</p>
            </li>
            <li><BiCheck className='service__list-icon' />
              <p>Inserción de pasarelas de pago.</p>
            </li>
          </ul>
        </article>
        <article className="services">
          <div className="services__head">
            <h3>Marketing Digital SEO / SEM</h3>
          </div>
          <ul className='service__list'>
            <li><BiCheck className='service__list-icon' />
              <p>Estudio de palabras clave dedicado para cada negocio (Keyword research).</p>
            </li>
            <li><BiCheck className='service__list-icon' />
              <p>Creación de Contenido, inserción de articulos a la Página web.</p>
            </li>
            <li><BiCheck className='service__list-icon' />
              <p>Optimización de contenido para los motores de busqueda.</p>
            </li>
            <li><BiCheck className='service__list-icon' />
              <p>Posicionamiento Web LINKBUILDING WEB, Enlazado Interno.</p>
            </li>
            <li><BiCheck className='service__list-icon' />
              <p>Uso de Analítica web (Google Analytics, Google search
Console, etc).</p>
            </li>
            <li><BiCheck className='service__list-icon' />
              <p>Tráfico de visitas órganicas en Ventas.</p>
            </li>
          </ul>
        </article>
        <article className="services">
          <div className="services__head">
            <h3>Contenido / Diseño Gráfico</h3>
          </div>
          <ul className='service__list'>
            <li><BiCheck className='service__list-icon' />
              <p>Diseño gráfico banners logos etc. (Photoshop, illustrator,
CorelDraw).</p>
            </li>
            <li><BiCheck className='service__list-icon' />
              <p>Publicaciones en redes sociales (Facebook, Instagram, Twitter, etc).</p>
            </li>
            <li><BiCheck className='service__list-icon' />
              <p>Creación de Logos corporativos para empresas.</p>
            </li>
            <li><BiCheck className='service__list-icon' />
              <p>Creación de correos Electrónicos Empresariales.</p>
            </li>
            <li><BiCheck className='service__list-icon' />
              <p>Alojamiento Web, y adquisiciónd de dominios corporativos.</p>
            </li>
            <li><BiCheck className='service__list-icon' />
              <p>Creación de Blogs.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services