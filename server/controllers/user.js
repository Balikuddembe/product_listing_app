const User = require("../models/user");

const getAllUsers = async (req, res) => {
  const users = await User.findAll();
  res.status(200).send(users);
};

const addUser = async (req, res) => {
  try {     
    const body = req.body;
    console.log("body", body);
    const user = await User.create(body);
    res.status(201).send(user);
  } catch (error) {
    res.status(500).send("Error while adding user.Try again later.");
  }
};
    
module.exports = { getAllUsers, addUser };
