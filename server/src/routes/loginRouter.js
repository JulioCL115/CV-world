const { Router } = require("express");

const {
  loginHandler,
} = require("../handlers/login.handler");

const loginRouter = Router();

loginRouter.post("/", loginHandler);


module.exports = loginRouter;
