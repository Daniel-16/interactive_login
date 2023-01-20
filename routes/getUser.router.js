const express = require("express");
const { getUser } = require("../controller/UserController");
const getUserRouter = express.Router();

getUserRouter.get("/getUser", getUser);
module.exports = getUserRouter;
