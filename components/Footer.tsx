import React from 'react'
import { AiFillGithub, AiOutlineMail, AiOutlineTwitter, AiFillInstagram, AiOutlineLinkedin } from 'react-icons/ai'
import styles from '@/components/Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <footer className='header'>
            <a href="https://www.lavarinimoreira.me" target="_blank" rel='noopener'>lavarinimoreira</a>
            <div className={styles.footer__div}>
                <a href="https://www.github.com/lavarinimoreira" target="_blank" rel='noopener'>
                    <AiFillGithub />
                </a>
                <a href="mailto:gabriel@lavarinimoreira.me" target="_blank" rel='noopener'>
                    <AiOutlineMail />
                </a>
                <a href="https://www.linkedin.com/in/gabriel-lavarini-moreira-878706149/" target="_blank" rel='noopener'>
                    <AiOutlineLinkedin />
                </a>
                <a href="https://twitter.com/lavarinimoreira" target="_blank" rel='noopener'>
                    <AiOutlineTwitter />
                </a>
                <a href="https://www.instagram.com/gabriel_lavarini/" target="_blank" rel='noopener'>
                    <AiFillInstagram />
                </a>
            </div>
        </footer>
    </div>
  )
}

export default Footer
