import React, { useState } from 'react';
import './Sign.css';
import '../component.css';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const [Name, setName] = useState('');
  const [Pass, setPass] = useState('');

  const formsubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
    console.log('Username:', Name);
    console.log('Password:', Pass);
    // Here, you can handle the form submission logic, such as sending the data to the server for authentication.
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePassChange = (e) => {
    setPass(e.target.value);
  };

  return (
    <div className='inputSign'>
      <form onSubmit={formsubmit}>
        <h5 className='flexCenter paddings secondaryText'>Log into your Account</h5>
        <input
          type='text'
          value={Name}
          onChange={handleNameChange}
          id='userName'
          name='userName'
          placeholder='Username'
        />
        <input
          type='password'
          value={Pass}
          onChange={handlePassChange}
          id='password'
          name='password'
          placeholder='Enter password'
        />
        <input type='submit' value='Login' />
        Already have an account? <Link to='/signup'>Sign Up</Link>
      </form>
  
    </div>
  );
};

export default SignIn;

