import React from 'react'
import { Button } from '../Button/Button'
import './herosection.css'



function HeroSection() {
  return (
    <div className='hero-container'>
        <video src='./videos/video-1.mp4' autoPlay loop muted />
        <h1>Welcome</h1>
        <h2>to</h2>
        <h3> jerrfromkenya.space</h3>
        <p></p>
        <div className="hero-btns">
            <Button className='btns' link='/portfolio' buttonStyle='btn--outline'
            buttonSize='btn--large'>GET STARTED</Button>
             <Button className='btns' buttonStyle='btn--primary'
            buttonSize='btn--large'>WATCH TRAILER <i className="far fa-play-circle"></i>  </Button>
        </div>
    </div>
  )
}

export default HeroSection
