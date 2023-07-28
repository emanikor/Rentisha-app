
import React from 'react';
import './Sign.css';
import '../component.css';


const SignIn = () => {
  return (
    <div className='inputSign '>

      <form>
        <h5 className='flexCenter paddings '>Log into your Account </h5>
        <input type='text' name='userName' placeholder='Username' />
        <input type='password' name='Password' placeholder='Enter password' />
        <input type='submit' value='Login' />
        <h5>Already having an account? Please signUp</h5>
      </form>
    </div>
  );
};

export default SignIn;