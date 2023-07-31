const {register, login} = require("../Controllers/AuthControllers");

const router = require("express").Router();


router.post("/")

router.post("/Registration/SignUp", register);
router.post("/Registration/SignIn", login);


module.exports = router;
