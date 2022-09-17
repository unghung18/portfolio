import React from 'react'
import { FiInstagram } from 'react-icons/fi'
import { BsGithub } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'


const LinkSocials = () => {
    return (
        <div className='link__socials'>
            <a href='https://github.com/ronglon1802' target='_blank' rel="noreferrer"><BsGithub className='social-icon' /></a>
            <a href='https://www.messenger.com/t/100058122019367/' target='_blank' rel="noreferrer"><BsFacebook className='social-icon' /></a>
            <a href='https://www.instagram.com' target='_blank' rel="noreferrer"><FiInstagram className='social-icon' /></a>
        </div>
    )
}

export default LinkSocials