import React from 'react'
import './Hero.css'
import hero_image from '../Assets/hero_image.jpg'

 const Hero = () => {
  return (
    <div className='hero'>

        <div className="hero-right">
            <img className='t' src={hero_image} alt="" />
        </div>
    </div>
  )
}
export default Hero
