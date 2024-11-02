const express = require("express");
const { getAllUsers, addUser } = require("../controllers/user");
const Router = express.Router();

Router.get("/", getAllUsers);
Router.post("/", addUser);


module.exports = Router;
