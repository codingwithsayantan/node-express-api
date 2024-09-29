const express = require("express");

const userController = require("../controller/user-welcome-controller");

const userRoute = express.Router();

userRoute.get("/v1/me", userController.welcomeUser);

module.exports = userRoute;
