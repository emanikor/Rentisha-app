const UserModel = require("../Models/UserModel");
const jwt = require("jsonwebtoken");

const maxAge = 3 * 24 * 60 * 60;

const createToken = (id) => {
  return jwt.sign({ id }, "rentisha supper secret key", {
    expiresIn: maxAge,
  });
};

// handle err validation
const handleErrors = (err) => {
  let errors = { email: "", password: "" };

  if (err.code === 11000) {
    errors.email = "Email is already registered";
  }
  
  //  error message for"users validation failed"
  if (err.message.includes("users validation failed")) {

    // Loop through the error messages and set them in the errors object
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};

module.exports.register = async (req, res, next) => {
  try {
    const { name,  email, phone, password, confirmPassword  } = req.body;
    const user = await UserModel.create({name,  email, phone, password, confirmPassword });
    const token = createToken(user._id);

    res.cookie("jwt", token, {
      withCredentials: true,
      httpOnly: false,
      maxAge: maxAge * 1000,
    });

    res.status(201).json({ user: user._id, created: true });
  } catch (err) {
    console.log(err);
    const errors = handleErrors(err);
    res.json({ errors, created: false });
  }
};

module.exports.signin = async (req, res, next) => {
//    signin
};
