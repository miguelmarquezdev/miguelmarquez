import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsFacebook } from 'react-icons/bs'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_z514djc', 'template_4c5olly', form.current, 'j5omf6Opzh06EZcmZ')
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Ponte en Contacto</h5>
      <h2>Contáctame</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>miguelmarquezservices@gmail.com</h5>
            <a href="mailto:miguelmarquezservices@gmail.com" target="_blank">Enviar un Mensaje</a>
          </article>
          <article className="contact__option">
            <BsFacebook className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>miguelmarquez</h5>
            <a href="https://m.me/miguelito.marquuez" target="_blank">Enviar un Mensaje</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5>+51 937 253 787</h5>
            <a href="https://wa.link/sbg6j9" target="_blank">Enviar un Mensaje</a>
          </article>
        </div>

        {/* END CONTACT OPTIONS */}
        
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Nombre Completo' required />
          <input type="email" name="email" placeholder=' Correo Electronico' required id="" />
          <textarea name="message" id="" rows="7" placeholder='Mensaje' required></textarea>
          <button type='submit' className='btn btn-primary'>Enviar Mensaje</button>
        </form>
      </div>
    </section>
  )
}

export default Contact