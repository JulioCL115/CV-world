const { Router } = require("express");

const { registerHandler } = require("../handlers/users.handler");

const registerRouter = Router();

registerRouter.post("/", registerHandler);

module.exports = registerRouter;
