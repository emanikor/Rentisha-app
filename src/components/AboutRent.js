import React from 'react'
import Vector from './images/Vector.png';
import './component.css';
import './AboutRent.css';



const AboutRent =() => {
  return (
    <div className='AboutWork'>
        <div className='flexCenter paddings container'>
              <div className='paddings content'>
                <h2 className='hero-title '>How to rent on Rentisha</h2>
                <p className=' abouttext'>
                Access items without owning<br></br>
                 them by renting them from <br></br>
                  people in your neighbourhood in
                  <br></br> a few easy steps.
                </p>
                <button className='btn-about'>How it works</button>
              </div>
              <img src={Vector}
         alt="about" 
         className="Howitwork"
          />
        </div>
    </div>
  )
  
}

export default AboutRent