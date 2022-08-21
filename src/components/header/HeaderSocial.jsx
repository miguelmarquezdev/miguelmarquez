import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'

const HeaderSocial = () => {
    return (
        <div className='header__socials'>
            <a href="https://kinkein.com" target="_blank"><BsLinkedin/></a>
            <a href="https://www.facebook.com/Paginas-web-Cusco-Solutions-109886368429362" target="_blank"><BsFacebook/></a>
            <a href="https://instagram.com" target="_blank"><BsInstagram/></a>
        </div>
    )
}

export default HeaderSocial