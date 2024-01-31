const { Router } = require("express");
const loginRouter = require("./loginRouter");
const registerRouter = require("./registerRouter");

const router = Router();

router.use("/register", registerRouter);
router.use("/login", loginRouter);

module.exports = router;
