
const { SignUp, SignIn } = require("../Controllers/AuthControllers");
const router = require("express").Router();

router.post("/SignUp", SignUp);
router.post("/SignIn", SignIn);

module.exports = router;

