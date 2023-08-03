import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import './Sign.css';

export const Login = (props) => {
    const navigate = useNavigate();
    const initialValues = {
      email: "",
      password: "",
    };
  
    const generateSuccess = (success) => toast.success(success, {
      position: "bottom-right"
    });
  
    const generateError = (err) => toast.error(err, {
      position: "bottom-right"
    });
  
    const [values, setValues] = useState(initialValues);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
          const { data } = await axios.post("http://localhost:4000/SignIn", {
            ...values,
          },
          {   
              withCredentials: true,  
          });
  
          if (data) {
            if (data.errors) {
                const { email, password } = data.errors;
                if (email) generateError(email)
                else if (password) generateError(password);
            } else {
                navigate("/");
                generateSuccess("Successfully logged in");
            }
          }
      } catch (err) {
          console.log(err);
      }
  
      console.log("Form submitted");
      console.log(values);
  
      // Authentication logic 
      
      // Reset form after submission
      setValues(initialValues);
    }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input
                    value={values.email}
                    onChange={(e) => setValues({ ...values, email: e.target.value })}
                    type="email"
                    placeholder="youremail@gmail.com"
                    id="email"
                    name="email"
                />
                <label htmlFor="password">Password</label>
                <input
                    value={values.password}
                    onChange={(e) => setValues({ ...values, password: e.target.value })}
                    type="password"
                    placeholder="********"
                    id="password"
                    name="password"
                />
                <button type="submit">Log In</button>
            </form>
             Don't have an account?<a className="link-text" onClick={() => props.onFormSwitch('SignUp')}> register here.</a>
            <ToastContainer />
        </div>
    )
}

export default Login;
