import { userModel } from "../models/user.model.js";

import { response } from "../utils/response.js";
import bcrypt from "bcrypt";
export let createUser = async (req, res) => {
  //
  try {
    let { name, email, password, phone, isVerified } = req.body;
    console.log(name);
    //
    password = await bcrypt.hash(password, 10);

    const newUser = new userModel({ name, email, password, phone, isVerified });
    const userData = await newUser.save();

    return response(res, userData, "user created success");
  } catch (error) {
    return response(res, null, error.message, false, 500);
  }
};

export let getUserById = async (req, res) => {
  try {
    let userId = req.params.id;
    let userData = await userModel.findById(userId);
    return response(res, userData, "user data get success");
  } catch (error) {
    return response(res, null, error.message, false, 500);
  }
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
