import React, { useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [Phone, setPhone] = useState('')
    const [passConfirm, setPassConfirm] =useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('form submitted')
        console.log(email);

        // authentication 
    }

    return (
        <div className="auth-form-container">
            <h2 className="paddings">Register Your Account Here</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input value={name} name="name"
              onChange={(e) => setName(e.target.value)}
              id="name" placeholder="full Name"required />


            <label htmlFor="email">email</label>
            <input value={email} 
            onChange={(e) => setEmail(e.target.value)}type="email" 
            placeholder="youremail@gmail.com" 
            id="email"
             name="email" required />

      
            <label htmlFor="password">Phone no:</label>
            <input value={Phone} 
            onChange={(e) => 
              setPhone(e.target.value)}type="Number" 
            placeholder="Enter Your Phone.." 
            id="Number" name="Number" required />


            <label htmlFor="password">password</label>
            <input value={pass} 
            onChange={(e) => setPass(e.target.value)}type="password" 
            placeholder="********"
             id="password" name="password" required />


            <label htmlFor="password">Corfirm password</label>
            <input value={passConfirm} 
            onChange={(e) => setPassConfirm(e.target.value)} 
            type="password"
             placeholder="confrim password"
             id="password" name="password" required />

            <button className='reg-btn' type="submit">Log In</button>
        </form>
        <a className="link-text" onClick={() => props.onFormSwitch('SignIn')}>Already have an account? Login here.</a>
    </div>
    )
}
export default Register