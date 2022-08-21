import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/legal.png'
import HeaderSocial from './HeaderSocial'


const Header = () => {
  return (
    <header>
      <div className="container header__container ">
        <h5>Hola soy</h5>
        <h1>Miguel Marquez</h1>
        <h5 className='text-light'>Diseño Páginas Web</h5>
        <CTA />
        <HeaderSocial/>
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header