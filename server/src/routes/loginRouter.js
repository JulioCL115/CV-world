const { Router } = require("express");

const {
  loginHandler,
} = require("../handlers/users.handler");

const loginRouter = Router();

loginRouter.post("/", loginHandler);


module.exports = loginRouter;
