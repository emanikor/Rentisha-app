const {SignUp, SignIn} = require("../Controllers/AuthControllers");

const router = require("express").Router();


router.post("/")

router.post("/Registration/SignUp", SignUp);
router.post("/Registration/SignIn", SignIn);


module.exports = router;
