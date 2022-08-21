import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'


const footer = () => {
  return (
    <footer id='footer'>
      <a href="#" className='footer__logo'>Web Cusco Solutions</a>
      <ul className="permalinks">
        <li><a href="#">Inicio</a></li>
        <li><a href="#about">Sobre Mi</a></li>
        <li><a href="#experience">Experiencia</a></li>
        <li><a href="#services">Servicios</a></li>
        <li><a href="#portfolio">Portafolio</a></li>
        <li><a href="#testimonials">Testimonios</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/Paginas-web-Cusco-Solutions-109886368429362" target="_blank"><BsFacebook/></a>
        <a href="https://Instagram.com" target="_blank"><BsInstagram/></a>
        <a href="https://Twitter.com" target="_blank"><BsTwitter/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Miguel Marquez Todos los derechos reservados</small>
      </div>
      </footer>
  )
}

export default footer