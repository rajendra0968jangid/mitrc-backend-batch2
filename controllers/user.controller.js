import { userModel } from "../models/user.model.js";

export let createUser = (req, res) => {
  res.send("create user");
};

export let getUserById = (req, res) => {
  //console.log(req.params.id);
  res.send("get user by id CHECK" + req.params.id);
};

export let getAllUser = (req, res) => {
  res.send("get all user");
};

export let userUpdateById = (req, res) => {
  res.send("update user by id");
};

export let userDeleteById = (req, res) => {
  res.send("user delete by id");
};
