// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import { useCookies } from "react-cookie";
// import { Link, useNavigate } from "react-router-dom";


// const Register =()=> {
//   const [cookies] = useCookies(["cookie-name"]);
//   const navigate = useNavigate();
//   useEffect(() => {
//     if (cookies.jwt) {
//       navigate("/");
//     }
//   }, [cookies, navigate]);

//   const [values, setValues] = useState({ email: "", password: "" });

//   const generateError = (error) =>
//     toast.error(error, {
//       position: "bottom-right",
//     });



//   const handleSubmit = async (event) => {


//     event.preventDefault();
//     try {
//       const { data } = await axios.post(
//         "http://localhost:4000/register",
//         {
//           ...values,
//         },
//         { withCredentials: true }
//       );
//       if (data) {
//         if (data.errors) {
//           const { email, password } = data.errors;
//           if (email) generateError(email);
//           else if (password) generateError(password);
//         } else {
//           navigate("/");
//         }
//       }
//     } catch (ex) {
//       console.log(ex);
//     }
//   };

//   return (
//     <div className="auth-form-container">
//       <h2 className="paddings">Register Your Account Here</h2>
//       <form className="register-form" onSubmit={handleSubmit}>
//         <label htmlFor="name">Full name</label>
//         <input
//           name="name"
//           id="name"
//           placeholder="Full Name"
         
//           value={values.name}
//           onChange={(e) =>
//             setValues({ ...values, [e.target.name]: e.target.value })
//           }
//         />

//         <label htmlFor="email">Email</label>
//         <input
//           type="email"
//           placeholder="youremail@gmail.com"
//           id="email"
//           name="email"
        
//           value={values.email}
//           onChange={(e) =>
//             setValues({ ...values, [e.target.name]: e.target.value })
//           }
//         />

//         <label htmlFor="phone">Phone no:</label>
//         <input
//           type="number"
//           placeholder="Enter Your Phone no..."
//           id="phone"
//           name="phone"
          
//           value={values.phone}
//           onChange={(e) =>
//             setValues({ ...values, [e.target.name]: e.target.value })
//           }
//         />

//         <label htmlFor="password">Password</label>
//         <input
//           type="password"
//           placeholder="********"
//           id="password"
//           name="password"
          
//           value={values.password}
//           onChange={(e) =>
//             setValues({ ...values, [e.target.name]: e.target.value })
//           }
//         />

//         <label htmlFor="confirmPassword">Confirm password</label>
//         <input
//           type="password"
//           placeholder="Confirm password"
//           id="confirmPassword"
//           name="confirmPassword"
         
//           value={values.confirmPassword}
//           onChange={(e) =>
//             setValues({ ...values, [e.target.name]: e.target.value })
//           }
//         />

//         <button className="reg-btn" type="submit">
//         Submit
//         </button>
//       </form>
//             <span>
//           Already have an account ?<Link to="/login"> Login</Link>
//         </span>

      
//       <ToastContainer />
//     </div>
//   );
// };

// export default Register;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import './Sign.css';

export const Register = (props) => {
  const Navigate = useNavigate();
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  };




  const generateSuccess = (message) => toast.success(message, {
    position: "bottom-right"
  });

  const generateError = (err) => toast.error(err, {
    position: "bottom-right"
  });

  const [values, setValues] = useState(initialValues);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (values.password !== values.confirmPassword) {
      generateError("Password and Confirm Password do not match");
      return;
    }

    
  try {
    const { data } = await axios.post("http://localhost:4000/SignUp", {
      ...values,
    }
  );

    if (data) {
      if (data.errors) {
        const { email, password } = data.errors;
        if (email) generateError(email);
        else if (password) generateError(password);
      } else {
        generateSuccess("Successfully.");
        Navigate("/Profile");
        
      }
    } // Log the response from the server
  } catch (err) {
    console.log(err);
    toast.error("Email is already registered.");

  }

  console.log("Form submitted");
  console.log(values);
    // Reset form after submission
    setValues(initialValues);
  };

  return (
    <div className="auth-form-container">
      <h2 className="paddings">Register Your Account Here</h2>
      <form className="register-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Full name</label>
//         <input
          name="name"
          id="name"
          placeholder="Full Name"
         
          value={values.name}
          onChange={(e) =>
            setValues({ ...values, [e.target.name]: e.target.value })
          }
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        
          value={values.email}
          onChange={(e) =>
            setValues({ ...values, [e.target.name]: e.target.value })
          }
        />

        <label htmlFor="phone">Phone no:</label>
        <input
          type="number"
          placeholder="Enter Your Phone no..."
          id="phone"
          name="phone"
          
          value={values.phone}
          onChange={(e) =>
            setValues({ ...values, [e.target.name]: e.target.value })
          }
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="********"
          id="password"
          name="password"
          
          value={values.password}
          onChange={(e) =>
            setValues({ ...values, [e.target.name]: e.target.value })
          }
        />

        <label htmlFor="confirmPassword">Confirm password</label>
        <input
          type="password"
          placeholder="Confirm password"
          id="confirmPassword"
          name="confirmPassword"
         
          value={values.confirmPassword}
          onChange={(e) =>
            setValues({ ...values, [e.target.name]: e.target.value })
          }
        />

        <button className="reg-btn" type="submit">
          Submit
        </button>
      </form>
      Already have an account? <a className="link-text" onClick={() => props.onFormSwitch("SignIn")}>
         Login here.
    
      </a>
      <ToastContainer />
    </div>
  );
};

export default Register;
