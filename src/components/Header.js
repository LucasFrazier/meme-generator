import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <header className='header'>
      <img 
          src='./images/circle-headshot.png' 
          alt='head shot icon of Lucas Frazier'
          className='header--image'
      />
      <h2 className='header--title'>Meme Generator</h2>
      <h4 className='header--project'>A React App - By Lucas Frazier</h4>
    </header>
  )
}
