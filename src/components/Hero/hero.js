import React from 'react'
import './Hero.css';
import '../component.css';
import   homeimage  from '../images/homeimage.png';



function Hero() {
  return (
    <section className='hero-wrapper'>
      <div className='paddings innerWidth hero-container'>
    {/* left-hero */}
        <div className='flexColStart left-hero'>
          <h1 className='flexColStart hero-title'>Rent anything<br></br> from people near<br></br> you area <span>Fast</span> </h1>
        <span className='flexColStart hero-text'>Borrow anything fun from people
         nearby for jobs at home, fun and experience or work 
          
          </span>
          <div className='heros-btn'>
        <button className='btnHero'>Rent Now</button>
        <button className='btnHero2'>list of items</button>
        </div>
        </div>

        <div className='flexCenter right-hero1'>
         <div className='flexCenter image-container'>
         <img src={homeimage}
         alt="car" 
         className="hero-car-section"
          />

         </div>
        </div>
    </div>
    <div className='break flexCenter innerWith'></div>
    </section>
  )
}

export default Hero