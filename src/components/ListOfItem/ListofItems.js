import React from 'react'
import './ListOfItems.css'
import '../component.css'
import listImage from '../images/listImage.jpg';

const ListofItems= () => {
  return (
    <div className='listInput'>
        
        <form>
        <h2 className='headProduct paddings'>List of Items page</h2>
            <label>Item Name</label>
          
          <input type='name' placeholder='enter item name'></input>

          <lable>Item Description </lable>
          <textarea typeof='message' placeholder='Text area for the renter to provide a description of the item, including any relevant details or specifications.'></textarea>

          <lable>Item  Category:</lable>
          <input type='name' placeholder='Input item you want to rent; Laptop, Phone , Camera etc...'></input>
          <label>Listing price</label>
          <input type='text' placeholder='specify the rental price per day or per week.'></input>
          <div className="inputField">
          <div className=' input'>
          <label htmlFor='drop-address' className='label'>Drop-off Address</label>

          <div className='input input-wrapper'>
            <input type='text' id='drop-address' placeholder='Enter your location...' />
            <i class="fa-solid fa-location-dot"></i>
          </div>

       </div>
        <div className='input'>
          <label htmlFor='pick-date' className='label'>Pick-up Date</label>
          <input type='date' id='pick-date' />
        </div>

        <div className='input'>
          <label htmlFor='pick-time' className='label'>Pick-up Time</label>
          <input type='time' id='pick-time' />
        </div>
        
        </div>
      
        <div className=' OwnerInput '>
        <h4>Owners Details</h4>
        <div className="inputField">
          <div className=' input'>
          <label htmlFor='name' >First name</label>

          <div className='input input-wrapper'>
            <input type='text' id='firstName' placeholder='first name' />
          </div>

       </div>
        <div className='input'>
          <label htmlFor='secondName'>Second name</label>
          <input type='name' id='secondNmae'placeholder='second name' />
        </div>

        <div className='input'>
          <label htmlFor='phone number'>phone Number</label>
          <input type='NUmber' id='phoneNumber' placeholder='your phone number' />
        </div>
        
        </div>
        <input type='radio'></input>
            <p>Check the box r to agree to the terms and conditions of renting on the Rentisha platform.</p>      
        </div>
       
        <button className='btnHero'>Submit</button>
        </form>
        <img src={listImage} alt='inputImage'></img>

    </div>
  )
}

export default ListofItems