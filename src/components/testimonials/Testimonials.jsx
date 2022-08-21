import React from 'react'
import './testimonials.css'
import AVTAR1 from '../../assets/avatar1.jpg'
import AVTAR2 from '../../assets/avatar2.jpg'
import AVTAR3 from '../../assets/avatar3.jpg'
import AVTAR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTAR1,
    name: 'Dennis Challco',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae odio tempore commodi omnis culpa at hic? Fugiat possimus repellat vel, quas dolore quam? Voluptatem, exercitationem rerum minus et eos earum!'
  },
  {
    avatar: AVTAR2,
    name: 'Andrea Anelis',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae odio tempore commodi omnis culpa at hic? Fugiat possimus repellat vel, quas dolore quam? Voluptatem, exercitationem rerum minus et eos earum!'
  },
  {
    avatar: AVTAR3,
    name: 'Yhoner Ccalla',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae odio tempore commodi omnis culpa at hic? Fugiat possimus repellat vel, quas dolore quam? Voluptatem, exercitationem rerum minus et eos earum!'
  },
  {
    avatar: AVTAR4,
    name: 'Marco Andinauta',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae odio tempore commodi omnis culpa at hic? Fugiat possimus repellat vel, quas dolore quam? Voluptatem, exercitationem rerum minus et eos earum!'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Comentarios de nuestros Clientes</h5>
      <h2>Testimonios</h2>

      <Swiper className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>

        {
          data.map(({ avatar, name, review, index }) => {
            return (

              <SwiperSlide key={index} className='testimonial'>
                <div className="client__avatar">
                  <img src={avatar} alt={name} />
                </div>
                <h5>{name}</h5>
                <small className='client__review'>
                  {review}
                </small>
              </SwiperSlide>
            )
          })
        }

      </Swiper>
    </section>
  )
}

export default Testimonials