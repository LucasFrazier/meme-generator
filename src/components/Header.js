import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <header className='header'>
      <img 
          src='./images/circle-headshot.png' 
          alt='head shot icon of Lucas Frazier'
          className='header__image'
      />
      <h2 className='header__title'>Meme Generator</h2>
      <h4 className='header__project hide__small'>A React App<br />by Lucas Frazier</h4>
    </header>
  )
}
